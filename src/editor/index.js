import { __ } from '@googleforcreators/i18n';
import {
  StoryEditor,
  InterfaceSkeleton,
} from '@googleforcreators/story-editor';
import { elementTypes } from '@googleforcreators/element-library';
import { registerElementType } from '@googleforcreators/elements';

import {
  ALLOWED_MIME_TYPES,
  CAPABILITIES
} from './constants';
import {
  Accessibility,
  Design,
  Priority
} from './components/checklist';
import {
  default as Header,
} from './components/header';
import MediaUpload from './components/mediaUpload';
import CrossOriginIsolation from './components/crossOriginIsolation';
import DocumentPane, {
  PublishModalDocumentPane,
  IsolatedStatusPanel,
} from './documentPane';
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
  saveStoryById,
} from './../data';

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