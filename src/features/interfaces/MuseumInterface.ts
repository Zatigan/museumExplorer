import type { AccessibilityGuideInterface } from "./AccessibilityGuideInterface";
import type { ExhibitionInterface } from "./ExhibitionInterface";
import type { LocationInterface } from "./LocationInterface";
import type { ServicesInterface } from "./ServicesInterface";

export interface MuseumInterface {
 id: string,
 name: string,
 image: string,
 description: string,
 city: string,
 address: string,
 location: LocationInterface,
 domain: string,
 openingHours: string,
 prices: string,
 accesibility: string,
 services: ServicesInterface,
 accessibilityGuide: AccessibilityGuideInterface
 exhibitions: ExhibitionInterface;
}