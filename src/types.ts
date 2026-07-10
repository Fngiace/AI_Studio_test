/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AnatomyHotspot {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  subtitle: string;
  description: string;
  secretKey: string;
  secretDetail: string;
}

export interface SauceIngredient {
  id: string;
  name: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  color: string;
  icon: string;
}

export interface DippingProfile {
  name: string;
  description: string;
  matchScore: number; // out of 100
  flavorNote: string;
}

export interface SteamingOutcome {
  status: 'raw' | 'perfect' | 'overcooked' | 'ruined';
  title: string;
  description: string;
  color: string;
  tips: string;
}
