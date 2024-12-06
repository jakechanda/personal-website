# Variables
MARKDOWN_FILE = swords_guide.md
OUTPUT_HTML = index.html
CSS_FILE = style.css
PANDOC_FLAGS = --standalone --toc --highlight-style=pygments

# Default target
all: $(OUTPUT_HTML)

# Generate HTML
$(OUTPUT_HTML): $(MARKDOWN_FILE) $(CSS_FILE)
	pandoc $(PANDOC_FLAGS) --css=$(CSS_FILE) -o $@ $<

# Clean up generated files
clean:
	rm -f $(OUTPUT_HTML)

# Preview the HTML in the default browser
preview: $(OUTPUT_HTML)
	xdg-open $(OUTPUT_HTML) || open $(OUTPUT_HTML)
