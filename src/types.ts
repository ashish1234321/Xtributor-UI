/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type View = 'landing' | 'login' | 'signup';
