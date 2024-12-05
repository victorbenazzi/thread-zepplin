# Contributing to Thread Zepplin

First off, thank you for considering contributing to Thread Zepplin! It's people like you that make Thread Zepplin such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Thread Zepplin. Following these guidelines helps maintainers and the community understand your report.

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one.

**When you are creating a bug report, please include as many details as possible:**

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Thread Zepplin, including completely new features and minor improvements to existing functionality.

**When you are creating an enhancement suggestion, please include as many details as possible:**

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead
* Explain why this enhancement would be useful to most Thread Zepplin users

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the JavaScript styleguide
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable messages that are easy to follow when looking through the project history.

Examples:

```
feat: add support for Meta Pixel
fix: resolve issue with worker initialization
docs: update README with new API methods
style: format code according to style guide
refactor: restructure worker communication
test: add unit tests for load method
chore: update dependencies
```

### JavaScript Styleguide

* Use 2 spaces for indentation
* Use semicolons
* Use single quotes for strings
* Use template literals for string interpolation
* Use meaningful variable names
* Add comments for complex logic
* Follow ES6+ best practices

### Testing

* Write unit tests for new features
* Ensure all tests pass before submitting a PR
* Include both positive and negative test cases
* Mock external dependencies appropriately

## Project Structure

```
thread-zepplin/
├── src/
│   ├── index.js        # Main entry point
│   ├── worker.js       # Web Worker implementation
│   └── cdn.js          # CDN version
├── tests/              # Test files
├── README.md           # English documentation
├── README.pt-BR.md     # Portuguese documentation
└── package.json        # Project metadata and dependencies
```

## Getting Help

If you need help, you can:

* Open an issue with your question
* Contact the maintainers directly
* Join our community discussions

## Attribution

This Contributing Guide is adapted from the open-source contribution guidelines for [GitHub](https://github.com/github/docs/blob/main/CONTRIBUTING.md). 