import { __ } from '@googleforcreators/i18n';
import {
  StoryEditor,
  InterfaceSkeleton,
  PageBackgroundTextLowContrast,
  TextElementFontSizeTooSmall,
  StoryPagesCount,
  PageTooMuchText,
  StoryMissingTitle,
  StoryTitleLength,
} from '@googleforcreators/story-editor';
import { elementTypes } from '@googleforcreators/element-library';
import { registerElementType } from '@googleforcreators/elements';
import saveStoryById from "./SaveStoryById";
import DocumentPane, {
  PublishModalDocumentPane,
  IsolatedStatusPanel,
} from './documentPane';
import { default as Header } from './header';

const Accessibility = () => (
  <>
    <PageBackgroundTextLowContrast />
    <TextElementFontSizeTooSmall />
  </>
);

const Design = () => (
  <>
    <StoryPagesCount />
    <PageTooMuchText />
  </>
);

const Priority = () => (
  <>
    <StoryMissingTitle />
    <StoryTitleLength />
  </>
);

const Editor = () => {
  const apiCallbacks = {
    saveStoryById,
  };

  elementTypes.forEach(registerElementType);

  const content = window.localStorage.getItem("STORY_CONTENT");
  const story = content ? JSON.parse(content) : {};

  return (
    <StoryEditor config={{ apiCallbacks }} initialEdits={{ story }}>
      <InterfaceSkeleton
        header={<Header />}
        sidebarTabs={{
          document: {
            title: __('Document', 'web-stories'),
            Pane: DocumentPane,
          },
          publishModal: {
            DocumentPane: PublishModalDocumentPane,
            IsolatedStatusPanel: IsolatedStatusPanel,
          },
        }}
        footer={{
          secondaryMenu: {
            checklist: {
              Priority,
              Design,
              Accessibility,
            },
          }
        }}
      />
    </StoryEditor>
  );
};

export default Editor;