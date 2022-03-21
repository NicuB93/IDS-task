/**
 * @mixin
 * @name fluidValue
 * @param property
 * @param maxValue
 * @param minValue
 * @param maxViewportWidth
 * @param minViewportWidth
 * @returns padding-left: calc(0px + ((116 - 0) * ((100vw - 768px) / (1200 - 768))));
 * @description Mixin return CSS property and calc function with values.
 */
export const fluidValue = (
  property: string,
  maxValue: string | number,
  minValue: string | number,
  maxViewportWidth: string | number,
  minViewportWidth: string | number
): string => `
 @media(min-width: ${minViewportWidth}px) and (max-width: ${maxViewportWidth}px) {
   ${property}: calc(${minValue}px + ((${maxValue} - ${minValue}) * ((100vw - ${minViewportWidth}px) / (${maxViewportWidth} - ${minViewportWidth}))));
 }
 @media(max-width: ${minViewportWidth} - 1px) {
   ${property}: ${minValue}px;
 }
`;
