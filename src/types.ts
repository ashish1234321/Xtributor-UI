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

export type View = 'landing' | 'login' | 'signup' | 'cloud-sellers' | 'b2b-saas' | 'integrations' | 'about' | 'contact' | 'careers';
