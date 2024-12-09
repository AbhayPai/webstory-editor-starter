/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import {
  __,
} from '@googleforcreators/i18n';
import {
  Panel,
  PanelTitle,
  PanelContent,
} from '@googleforcreators/story-editor';

/**
 * Internal dependencies
 */
import PublishTime from './publishTime';

function PublishPanel({ nameOverride }) {
  return (
    <Panel
      name={nameOverride || 'publishing'}
      collapsedByDefault={false}
    >
      <PanelTitle>{__('Publishing', 'web-stories')}</PanelTitle>
      <PanelContent>
        <PublishTime />
      </PanelContent>
    </Panel>
  );
}

export default PublishPanel;

PublishPanel.propTypes = {
  nameOverride: PropTypes.string,
};
