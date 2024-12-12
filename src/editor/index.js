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

import { ALLOWED_MIME_TYPES, CAPABILITIES } from './constants';
import { default as Header } from './header';
import DocumentPane, {
  PublishModalDocumentPane,
  IsolatedStatusPanel,
} from './documentPane';
import MediaUpload from './mediaUpload';
import {
  getMedia,
  getProducts,
  getCustomPageTemplates,
  getTaxonomies,
  getTaxonomyTerm,
} from './../data';
import {
  saveStoryById
} from "./../save";

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

const LayoutEditor = () => {
  const apiCallbacks = {
    saveStoryById,
    getMedia,
    getProducts,
    getCustomPageTemplates,
    getTaxonomies,
    getTaxonomyTerm,
  };

  elementTypes.forEach(registerElementType);

  const content = window.localStorage.getItem("STORY_CONTENT");
  const story = content ? JSON.parse(content) : {};

  return (
    <StoryEditor
      config={{
        apiCallbacks,
        capabilities: CAPABILITIES,
        allowedMimeTypes: ALLOWED_MIME_TYPES,
        MediaUpload,
        isShoppingEnabled: true,
        shoppingProvider: 'None',
      }}
      initialEdits={{ story }}
    >
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

export default LayoutEditor;