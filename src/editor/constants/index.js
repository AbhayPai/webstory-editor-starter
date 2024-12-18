/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const VISIBILITY = {
  PUBLIC: 'public',
  PRIVATE: 'private',
  PASSWORD_PROTECTED: 'protected',
};

export const STATUS = {
  PUBLISH: 'publish',
  FUTURE: 'future',
  PRIVATE: 'private',
  DRAFT: 'draft',
};

export const ALLOWED_MIME_TYPES = {
  audio: ['audio/mpeg', 'audio/aac', 'audio/wav', 'audio/ogg'],
  image: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp'],
  caption: ['text/vtt'],
  vector: ['image/svg+xml']
};

export const CAPABILITIES = {
  'hasUploadMediaAction': true,
  'canManageSettings': true,
}
