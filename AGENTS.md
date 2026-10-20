# Architecture rules

- Render the capability grid once between the hero and trust strip, using shared data and card components, to prevent duplicate cards across responsive hero layouts.
- When replacing a `.asset.json` pointer that code imports, write the new pointer to a temp file and move it into place; never redirect CLI output straight onto the live path, because the redirect empties the file and the dev server can cache a failed JSON transform that blanks the preview.