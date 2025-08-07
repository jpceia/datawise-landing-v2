/**
 * Format a date string to the specified locale
 * @param dateString - The date string to format
 * @param locale - The locale to format the date in (defaults to 'pt')
 * @returns Formatted date string
 */
export function formatDate(dateString: string, locale: string = 'pt'): string {
  const date = new Date(dateString);
  const localeMap: { [key: string]: string } = {
    'pt': 'pt-PT',
    'en': 'en-US',
    'fr': 'fr-FR',
    'es': 'es-ES'
  };
  
  return date.toLocaleDateString(localeMap[locale] || localeMap['pt'], {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
