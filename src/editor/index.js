import { __ } from '@googleforcreators/i18n';
import {
  StoryEditor,
  InterfaceSkeleton,
} from '@googleforcreators/story-editor';
import { elementTypes } from '@googleforcreators/element-library';
import { registerElementType } from '@googleforcreators/elements';

import {
  Accessibility,
  Design,
  Priority
} from './checklist';
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
  createTaxonomyTerm,
  getStoryById,
  getCurrentUser,
  getAuthors,
} from './../data';
import {
  saveStoryById
} from "./../save";
import CrossOriginIsolation from './crossOriginIsolation';

const LayoutEditor = () => {
  const apiCallbacks = {
    saveStoryById,
    getMedia,
    getProducts,
    getCustomPageTemplates,
    getTaxonomies,
    getTaxonomyTerm,
    createTaxonomyTerm,
    getStoryById,
    getCurrentUser,
    getAuthors,
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
        dashboardSettingsLink: '/',
        revisionLink: '/',
        api: {
          publisherLogos: '/',
        },
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
      <CrossOriginIsolation />
    </StoryEditor>
  );
};

export default LayoutEditor;