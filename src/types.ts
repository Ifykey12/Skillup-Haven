import { LucideIcon } from 'lucide-react';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: string;
  practicalExercise?: string;
  homework?: string;
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  objectives: string[];
  lessons: Lesson[];
}

export interface Resource {
  id: string;
  title: string;
  category: 'template' | 'guide' | 'list' | 'prompt';
  content: string;
}

export interface CourseData {
  title: string;
  subtitle: string;
  modules: Module[];
  pricingGuide: {
    service: string;
    lowRange: string;
    highRange: string;
  }[];
  outreachTemplates: {
    platform: string;
    text: string;
  }[];
  roadmap: {
    week: string;
    focus: string;
    tasks: string[];
  }[];
}
