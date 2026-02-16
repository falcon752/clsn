#!/bin/bash
# Remove inline styles and scripts from HTML files

# faq.html - remove head style (lines 13-158)
sed -i '.bak' '13,158d' faq.html

# help-and-information.html - remove head style (lines 13-318) and footer style (669-736)
sed -i '.bak' '13,318d' help-and-information.html
sed -i '.bak2' '356,423d' help-and-information.html  # Adjusted line numbers after first deletion

# volounteer.html - remove head style (lines 26-192) and footer style (659-726)
sed -i '.bak' '26,192d' volounteer.html
sed -i '.bak2' '492,559d' volounteer.html  # Adjusted line numbers after first deletion

# Remove inline scripts - search and delete
for file in *.html; do
    # Remove script blocks that contain our moved content (not external libraries)
    perl -i -0pe 's/<script>\s*\/\/ Bootstrap validation.*?<\/script>//gs' "$file"
    perl -i -0pe 's/<script>\s*\/\/ Enhanced scroll animations.*?<\/script>//gs' "$file"
    perl -i -0pe 's/<script>\s*\/\/ Bootstrap-only filtering.*?<\/script>//gs' "$file"
    perl -i -0pe 's/<script>\s*\/\/ Scroll animations.*?<\/script>//gs' "$file"
    perl -i -0pe 's/<script>\s*\/\/ Optional: open the first accordion.*?<\/script>//gs' "$file"
    perl -i -0pe 's/<script>\s*document\.querySelector\("details"\).*?<\/script>//gs' "$file"
done

echo "Cleanup complete"
