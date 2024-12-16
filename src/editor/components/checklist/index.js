import {
  PageBackgroundTextLowContrast,
  TextElementFontSizeTooSmall,
  StoryPagesCount,
  PageTooMuchText,
  StoryMissingTitle,
  StoryTitleLength,
} from '@googleforcreators/story-editor';

export const Accessibility = () => (
  <>
    <PageBackgroundTextLowContrast />
    <TextElementFontSizeTooSmall />
  </>
);

export const Design = () => (
  <>
    <StoryPagesCount />
    <PageTooMuchText />
  </>
);

export const Priority = () => (
  <>
    <StoryMissingTitle />
    <StoryTitleLength />
  </>
);
