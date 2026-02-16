#!/usr/bin/env python3
"""
Remove inline styles and certain script blocks from HTML files.
Keeps external script tags but removes inline code blocks.
"""

import re
import os

def clean_html_file(filepath):
    """Remove inline styles and specific script blocks from HTML file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove all <style>...</style> blocks
    content = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL)
    
    # Remove script blocks that don't have a src attribute (inline scripts)
    # But keep script tags with src attribute (external libraries)
    content = re.sub(
        r'<script>(?!\s*<).*?</script>',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Clean up multiple consecutive blank lines
    content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Cleaned: {filepath}")

# Process all HTML files
html_files = ['faq.html', 'help-and-information.html', 'volounteer.html']

for filename in html_files:
    if os.path.exists(filename):
        clean_html_file(filename)
    else:
        print(f"Skipped (not found): {filename}")

print("\nDone! All inline styles and scripts have been removed.")
print("The functionality is now in css/styles.css and js/main.js")
