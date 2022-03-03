const core = require('@actions/core');
const { HtmlUrlChecker } = require('broken-link-checker');

const brokenLinks = [];
let currentPage = '';
let countBroken = 0;
let countLinks = 0;
const URL = 'https://datavis.berlin';

const checker = new HtmlUrlChecker({
  excludedKeywords: ['//t.me/', '//linkedin.com/']
}, {
	error: (error) => {
  	console.log('error', { error })
  },
  link: (result) => {
  	countLinks += 1;
  	if (result.broken) {
  		brokenLinks.push(`- [ ] [${result.url.resolved}](${result.url.resolved}) (${result.brokenReason})`);
  		countBroken += 1;
  	}
  },
  end: () => {
  	const status = `${countBroken} of ${countLinks} links are broken.`;
  	core.info(status);
  	brokenLinks.unshift(status);
  	core.setOutput('content', brokenLinks.join('\n'));
  	core.setOutput('countBroken', countBroken);
  }
})

checker.enqueue(URL);
