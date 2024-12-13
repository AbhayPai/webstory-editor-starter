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
  useMemo,
  useCallback,
} from '@googleforcreators/react';
import styled from 'styled-components';
import { getExtensionsFromMimeType } from '@googleforcreators/media';
import {
  __,
  _n,
  sprintf,
  translateToExclusiveList,
} from '@googleforcreators/i18n';
import {
  Link,
  Text,
  TextSize,
  Icons,
} from '@googleforcreators/design-system';
import {
  highlightStates as states,
  highlightStyles as styles,
  Row,
  Media,
  Panel,
  Required,
  PanelTitle,
  PanelContent,
  useStory,
  useConfig,
  useHighlights,
  useSidebar,
} from '@googleforcreators/story-editor';
import { addQueryArgs } from '@googleforcreators/url';
/**
 * Internal dependencies
 */
import PublishTime from './publishTime';
import Author from './author';

const LabelWrapper = styled.div`
  height: 40px;
`;

const Label = styled(Text.Paragraph).attrs({
  as: 'label',
  size: TextSize.Small,
})`
  color: ${({ theme }) => theme.colors.fg.primary};
  font-size: 14px;
`;

const MediaWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 4px;
  height: 96px;
`;

const StyledMedia = styled(Media)`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
`;

const HighlightRow = styled(Row).attrs({
  spaceBetween: false,
})`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -20px;
    right: -10px;
    ${({ isHighlighted }) => isHighlighted && styles.FLASH}
    pointer-events: none;
  }
`;

const MediaInputWrapper = styled.div`
  height: 160px;
`;

const DropdownWrapper = styled.div`
  position: relative;
  width: 138px;
  margin-left: 30px;
  margin-top: 3px;
`;

const RevisionsWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  margin-top: 20px;
`;

const RevisionsLabel = styled.div`
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
`;

const LabelIconWrapper = styled.div`
  position: absolute;
  display: inline-block;
  margin-left: -5px;
`;

function PublishPanel({ nameOverride }) {
  const {
    state: { users },
  } = useSidebar();

  const {
    allowedMimeTypes: { image: allowedImageMimeTypes },
    dashboardSettingsLink,
    capabilities: { hasUploadMediaAction, canManageSettings },
    revisionLink,
  } = useConfig();

  const menuOptions = [hasUploadMediaAction && 'upload', 'hotlink'].filter(
    Boolean
  );

  const allowedImageFileTypes = useMemo(
    () =>
      allowedImageMimeTypes.flatMap((type) => getExtensionsFromMimeType(type)),
    [allowedImageMimeTypes]
  );

  const { highlightPoster, highlightLogo, resetHighlight } = useHighlights(
    (state) => ({
      highlightPoster: state[states.Poster],
      highlightLogo: state[states.PublisherLogo],
      resetHighlight: state.onFocusOut,
      cancelHighlight: state.cancelEffect,
    })
  );

  const { featuredMedia, updateStory, capabilities, revisions } =
    useStory(
      ({
        state: {
          story: {
            featuredMedia = { id: 0, url: '', height: 0, width: 0 },
            publisherLogo = { id: 0, url: '', height: 0, width: 0 },
            revisions,
          },
          capabilities,
        },
        actions: { updateStory },
      }) => {
        return {
          featuredMedia,
          publisherLogo,
          updateStory,
          capabilities,
          revisions,
        };
      }
    );

    const getErrorMessage = (message) => {
      let returnedMessage = __(
        'No file types are currently supported.',
        'web-stories'
      );

      if (allowedImageFileTypes.length) {
        returnedMessage = sprintf(
          message,
          translateToExclusiveList(allowedImageFileTypes)
        );
      }

      return returnedMessage;
    };

  const revisionCount = 5;
  const revisionId = revisions?.id ? revisions?.id : 0;
  const posterErrorMessage = getErrorMessage(
    /* translators: %s: list of allowed file types. */
    __('Please choose only %s as a poster.', 'web-stories')
  );

  const handleChangePoster = useCallback(
    /**
     * Handle story poster change.
     *
     * @param {import('@googleforcreators/media').Resource} newPoster The new image.
     * @return {void}
     */
    (newPoster) => {
      return updateStory({
        properties: {
          featuredMedia: {
            id: newPoster.id,
            url: newPoster.src,
            height: newPoster.height,
            width: newPoster.width,
            isExternal: newPoster.isExternal,
            needsProxy: newPoster.needsProxy,
          },
        },
      });
    },
    [updateStory]
  );

  return (
    <Panel
      name={nameOverride || 'publishing'}
      collapsedByDefault={false}
      isPersistable={!(highlightLogo || highlightPoster)}
    >
      <PanelTitle>{__('Publishing', 'web-stories')}</PanelTitle>
      <PanelContent>
        {capabilities?.publish && <PublishTime />}
        {capabilities?.['assign-author'] && users && <Author />}
        <HighlightRow
          isHighlighted={
            highlightPoster?.showEffect || highlightLogo?.showEffect
          }
          onAnimationEnd={() => resetHighlight()}
        >
          <MediaInputWrapper>
            <MediaWrapper>
              <StyledMedia
                ref={(node) => {
                  if (
                    node &&
                    highlightPoster?.focus &&
                    highlightPoster?.showEffect
                  ) {
                    node.focus();
                  }
                }}
                $width={72}
                $height={96}
                cropParams={{
                  width: 640,
                  height: 853,
                }}
                value={featuredMedia?.url}
                onChange={handleChangePoster}
                title={__('Select as poster image', 'web-stories')}
                hotlinkTitle={__(
                  'Use external image as poster image',
                  'web-stories'
                )}
                hotlinkInsertText={__(
                  'Use image as poster image',
                  'web-stories'
                )}
                hotlinkInsertingText={__(
                  'Using image as poster image',
                  'web-stories'
                )}
                buttonInsertText={__('Select as poster image', 'web-stories')}
                type={allowedImageMimeTypes}
                ariaLabel={__('Poster image', 'web-stories')}
                onChangeErrorText={posterErrorMessage}
                imgProps={featuredMedia}
                canUpload
                menuOptions={menuOptions}
              />
            </MediaWrapper>
            <LabelWrapper>
              <Label>{__('Poster image', 'web-stories')}</Label>
              <Required />
            </LabelWrapper>
          </MediaInputWrapper>
          <DropdownWrapper>
            <MediaWrapper>
            </MediaWrapper>
            <LabelWrapper>
              <Label>{__('Publisher Logo', 'web-stories')}</Label>
              <Row>
                <Required />
                {canManageSettings && (
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    href={dashboardSettingsLink}
                    size={TextSize.XSmall}
                  >
                    {__('Manage', 'web-stories')}
                  </Link>
                )}
              </Row>
            </LabelWrapper>
          </DropdownWrapper>
        </HighlightRow>
        {revisionCount > 1 ? (
          <RevisionsWrapper>
            <Label>
              <LabelIconWrapper>
                <Icons.History width={24} height={24} aria-hidden />
              </LabelIconWrapper>
              <RevisionsLabel>
                {sprintf(
                  /* translators: %d: number of revisions. */
                  _n(
                    '%d Revision',
                    '%d Revisions',
                    revisionCount,
                    'web-stories'
                  ),
                  revisionCount
                )}
              </RevisionsLabel>
              {revisionLink && revisionId ? (
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href={addQueryArgs(revisionLink, { revision: revisionId })}
                  size={TextSize.XSmall}
                >
                  {__('Browse', 'web-stories')}
                </Link>
              ) : null}
            </Label>
          </RevisionsWrapper>
        ) : null}
      </PanelContent>
    </Panel>
  );
}

export default PublishPanel;

PublishPanel.propTypes = {
  nameOverride: PropTypes.string,
};
