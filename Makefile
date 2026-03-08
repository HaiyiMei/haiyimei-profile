.PHONY: help website-dev website-build website-preview website-lint website-install

help:
	@echo "Usage: make <target>"
	@echo ""
	@echo "Website:"
	@echo "  website-dev      Start dev server"
	@echo "  website-build    TypeScript check + production build"
	@echo "  website-preview  Preview production build"
	@echo "  website-lint     Run ESLint"
	@echo "  website-install  Install dependencies"

website-dev:
	cd website && bun run dev

website-build:
	cd website && bun run build

website-preview:
	cd website && bun run preview

website-lint:
	cd website && bun run lint

website-install:
	cd website && bun install
