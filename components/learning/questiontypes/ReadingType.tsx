
import React from 'react';
import { ReadingPageData } from '../LessonDetailPage'; 
import { CategoryDetails } from '../../../types';

interface ReadingTypeProps {
  pageData: ReadingPageData;
  categoryDetails: CategoryDetails; // Added for consistency, though not used in current styling
}

// Regex to identify scripture quotes like "Phúc cho kẻ nghe Lời Thiên Chúa..." (Lc 11,28)
const scriptureRegex = /(“[^”]+”\s*\([A-Za-zÀ-ỹ]+\.?\s*\d+,\s*\d+(?:-\d+)?(?:;\s*[A-Za-zÀ-ỹ]+\.?\s*\d+,\s*\d+(?:-\d+)?)*\))/;


const ReadingType: React.FC<ReadingTypeProps> = ({ pageData, categoryDetails }) => {
  const passage = pageData.passage;
  const isQA = passage.includes("Hỏi:") && passage.includes("Thưa:");
  const containsScripture = scriptureRegex.test(passage);

  return (
    <div className="p-4 sm:p-6 overflow-y-auto h-full flex flex-col">
      {!isQA && containsScripture && ( // Only show "Lời Chúa" if NOT Q&A AND contains actual scripture
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Lời Chúa
        </h2>
      )}
      <div className="flex-grow">
        {isQA ? (
          (() => {
            let questionContent = "";
            let answerContent = "";
            
            const thuaIndex = passage.indexOf("Thưa:");
            
            if (passage.startsWith("Hỏi:") && thuaIndex > "Hỏi:".length) {
                const questionPartRaw = passage.substring(0, thuaIndex).trim();
                const answerPartRaw = passage.substring(thuaIndex).trim();

                questionContent = questionPartRaw.substring("Hỏi:".length).trim();
                answerContent = answerPartRaw.substring("Thưa:".length).trim();
            } else {
                // Fallback for unexpected Q&A format
                const parts = passage.split("Thưa:");
                questionContent = parts[0].replace("Hỏi:", "").trim();
                if (parts.length > 1) {
                  answerContent = parts.slice(1).join("Thưa:").trim();
                }
            }

            return (
              <>
                <p className="mb-2 text-gray-700 leading-relaxed text-base">
                  <strong className="text-gray-900">Hỏi:</strong> {questionContent}
                </p>
                {answerContent && (
                  <p className="text-gray-700 leading-relaxed text-base">
                    <strong className="text-gray-900">Thưa:</strong> {answerContent}
                  </p>
                )}
              </>
            );
          })()
        ) : (
          // Original scripture handling or plain text
          passage.split('\n').map((paragraph, pIndex) => {
            const paragraphParts = paragraph.split(scriptureRegex);
            return (
              <p key={pIndex} className="mb-3 text-gray-700 leading-relaxed text-base">
                {paragraphParts.map((part, partIndex) => {
                  if (scriptureRegex.test(part)) {
                    return (
                      <span key={partIndex} className="font-semibold italic text-2xl text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md inline-block shadow-sm">
                        {part}
                      </span>
                    );
                  }
                  return part;
                })}
              </p>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ReadingType;
