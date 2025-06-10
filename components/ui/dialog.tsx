
import React, { createContext, useContext, useEffect, useState } from 'react';

interface DialogContextProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogContext must be used within a DialogProvider');
  }
  return context;
};

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open: controlledOpen, onOpenChange: controlledOnOpenChange, children }) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const onOpenChange = controlledOnOpenChange !== undefined ? controlledOnOpenChange : setInternalOpen;
  
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      const openDialogs = document.querySelectorAll('[role="dialog"][data-state="open"]');
      if (openDialogs.length === 0) {
         document.body.style.overflow = '';
      }
    }
    return () => {
      // Check if any other dialogs will remain open after this one closes
      // This is a simplified check. A more robust solution might involve a global dialog manager.
      const otherOpenDialogsExist = Array.from(document.querySelectorAll('[role="dialog"][data-state="open"]'))
                                      .some(dialogEl => dialogEl !== document.querySelector(`[role="dialog"][aria-modal="true"][data-state="open"]`)); // Crude check
      if (!otherOpenDialogsExist) {
           document.body.style.overflow = '';
       }
    };
  }, [open]);


  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, onClick, ...props }, ref) => {
    const { onOpenChange, open } = useDialogContext();
    return (
      <button
        ref={ref}
        onClick={(e) => {
          onOpenChange(!open);
          onClick?.(e);
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
DialogTrigger.displayName = 'DialogTrigger';

const DialogPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { open } = useDialogContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      // Delay unmounting for animation (e.g. 300ms for slide-out)
      const timer = setTimeout(() => setMounted(false), 300); 
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [open]);

  if (!mounted && !open) return null;

  return <>{children}</>; 
};


const DialogOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { open } = useDialogContext();
    return (
      <div
        ref={ref}
        data-state={open ? 'open' : 'closed'}
        className={`fixed inset-0 z-40 bg-black bg-opacity-80 
                    data-[state=open]:animate-fadeInOverlay data-[state=closed]:animate-fadeOutOverlay
                    ${className || ''}`}
        {...props}
      />
    );
  }
);
DialogOverlay.displayName = 'DialogOverlay';

// Define extended props for DialogContent
interface DialogContentExtendedProps extends React.HTMLAttributes<HTMLDivElement> {
  preventCloseOnOverlayClick?: boolean;
}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentExtendedProps>(
  ({ className, children, preventCloseOnOverlayClick, ...props }, ref) => {
    const { open, onOpenChange } = useDialogContext();

    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onOpenChange(false);
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [onOpenChange]);

    // This specific DialogContent is for centered modals.
    // For the bottom sheet, ResultPopup will define its own animated container.
    return (
      <DialogPortal>
        <DialogOverlay onClick={preventCloseOnOverlayClick ? undefined : () => onOpenChange(false)} />
        <div
          ref={ref}
          data-state={open ? 'open' : 'closed'}
          role="dialog"
          aria-modal="true"
          // Added 'dialog-content-centered-modal' for specific animation targeting in index.html
          className={`dialog-content-centered-modal fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 grid w-full max-w-sm gap-4 
                      border bg-white p-0 shadow-lg rounded-2xl
                      data-[state=open]:animate-in 
                      data-[state=closed]:animate-out
                      ${className || ''}
                    `}
          {...props}
          onClick={(e) => e.stopPropagation()} 
        >
          {children}
        </div>
      </DialogPortal>
    );
  }
);
DialogContent.displayName = 'DialogContent';

const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className || ''}`} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className || ''}`} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={`text-lg font-semibold leading-none tracking-tight ${className || ''}`}
      {...props}
    />
  )
);
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={`text-sm text-gray-500 ${className || ''}`}
      {...props}
    />
  )
);
DialogDescription.displayName = 'DialogDescription';

const DialogClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, onClick, ...props }, ref) => {
    const { onOpenChange } = useDialogContext();
    return (
      <button
        type="button"
        ref={ref}
        onClick={(e) => {
          onOpenChange(false);
          onClick?.(e);
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
DialogClose.displayName = 'DialogClose';

export {
  Dialog,
  DialogTrigger,
  DialogContent, // This is the centered modal version
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogOverlay,
  DialogPortal // Exporting DialogPortal for custom content like bottom sheet
};
