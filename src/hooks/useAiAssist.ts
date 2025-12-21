import { useState, useEffect } from 'react';
import { AI_USAGE_LIMIT, AI_STORAGE_KEY } from '../utils/constants';

interface AiUsage {
  count: number;
  resetAt: number;
}

export const useAiAssist = () => {
  const [usage, setUsage] = useState<AiUsage>({ count: 0, resetAt: 0 });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    loadUsage();
  }, []);

  const loadUsage = () => {
    try {
      const saved = localStorage.getItem(AI_STORAGE_KEY);
      if (saved) {
        const data: AiUsage = JSON.parse(saved);
        if (Date.now() > data.resetAt) {
          const newUsage = { count: 0, resetAt: getResetTime() };
          setUsage(newUsage);
          saveUsage(newUsage);
        } else {
          setUsage(data);
        }
      } else {
        const newUsage = { count: 0, resetAt: getResetTime() };
        setUsage(newUsage);
        saveUsage(newUsage);
      }
    } catch (error) {
      console.error('Failed to load AI usage:', error);
    }
  };

  const saveUsage = (data: AiUsage) => {
    try {
      localStorage.setItem(AI_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save AI usage:', error);
    }
  };

  const getResetTime = () => {
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    return tomorrow.getTime();
  };

  const canUseAi = () => {
    return usage.count < AI_USAGE_LIMIT;
  };

  const improveText = async (text: string, context: string): Promise<string> => {
    if (!canUseAi()) {
      throw new Error(
        `Daily limit reached. You can use AI assist ${AI_USAGE_LIMIT} times per day.`
      );
    }

    if (!text.trim()) {
      throw new Error('Please enter some text first.');
    }

    setIsProcessing(true);

    try {
      const prompts: Record<string, string> = {
        aboutProfession:
          'Rewrite this professional background in a clear, impressive way suitable for a marriage biodata. Keep it concise and professional.',
        aboutFamily:
          'Rewrite this family description in a warm, respectful way suitable for a marriage biodata. Highlight family values and background.',
        aboutMe:
          'Rewrite this personal description in an authentic, appealing way suitable for a marriage biodata. Highlight positive qualities and character.',
        partnerExpectations:
          'Rewrite these partner expectations in a clear, respectful way suitable for a marriage biodata. Be specific but not overly demanding.',
      };

      const prompt = prompts[context] || prompts.aboutMe;

      const improvedText = await callAiService(text, prompt);

      const newUsage = {
        count: usage.count + 1,
        resetAt: usage.resetAt,
      };
      setUsage(newUsage);
      saveUsage(newUsage);

      return improvedText;
    } catch (error) {
      console.error('AI assist error:', error);
      throw error;
    } finally {
      setIsProcessing(false);
    }
  };

  const callAiService = async (
    text: string,
    prompt: string
  ): Promise<string> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const improvements = [
      text.charAt(0).toUpperCase() + text.slice(1),
      text.replace(/\s+/g, ' ').trim(),
      text.endsWith('.') ? text : text + '.',
    ];

    return improvements.join(' ').slice(0, text.length * 1.3);
  };

  return {
    improveText,
    canUseAi,
    remainingUses: AI_USAGE_LIMIT - usage.count,
    isProcessing,
  };
};
