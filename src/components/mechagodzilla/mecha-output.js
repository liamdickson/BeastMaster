module.exports = {
	"results": {
		"env": "qa",
		"stats": {
			"suites": 6,
			"tests": 4,
			"passes": 4,
			"pending": 0,
			"failures": 0,
			"start": "2015-06-29T20:16:28.020Z",
			"end": "2015-06-29T20:18:56.946Z",
			"duration": 148926
		},
		"suites": {
			"@buyer @buyer-user-account @1stdibs As a Buyer": {
				"when I have logged in and navigate to the Account Information page": {
					"testsForThisSuite": [{
						"title": "should serve the page using HTTPS (all)",
						"fullTitle": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the Account Information page should serve the page using HTTPS (all)",
						"code": "commonSteps.client.navigateTo(urlHelper.createBaseComUrl());\nauthModal.login(userBuyers.users.standard.email, userBuyers.users.standard.password);\nmainNav.openUserMenu();\ncommonSteps.client.pause(2000);\ncommonSteps.client.waitAndClick(accountPage.selector);\ncommonSteps.verifyPartialUrl('https');\ncommonSteps.verifyPartialUrl(accountPage.urlPartial);\nexpect(mainNav.selectors.userMenu).to.be.visibleOnPage();\ncommonSteps.client.call(done);",
						"duration": 22324,
						"passed": true,
						"pending": false,
						"state": "passed",
						"err": {},
						"consoleErrors": [],
						"nonFatalErrors": [],
						"passes": 1,
						"failures": 0,
						"screenshotPath": "/jenkins/workspace/MechaGodzilla Buyer Account Tests (QA)/lib/reporter/images/screenshots//buyer_user_account_spec/as_a_buyer_when_i_have_logged_in_and_navigate_to_the_account_information_page_should_serve_the_page_using_https_all.png",
						"url": "https://qa.1stdibs.com/my/account/"
					}]
				},
				"when I have logged in and navigate to the My Conversations page": {
					"testsForThisSuite": [{
						"title": "should serve the page using HTTPS (all)",
						"fullTitle": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Conversations page should serve the page using HTTPS (all)",
						"code": "commonSteps.client.navigateTo(urlHelper.createBaseComUrl());\nauthModal.login(userBuyers.users.standard.email, userBuyers.users.standard.password);\nmainNav.openUserMenu();\ncommonSteps.client.pause(2000);\ncommonSteps.client.waitAndClick(accountPage.selector);\ncommonSteps.verifyPartialUrl('https');\ncommonSteps.verifyPartialUrl(accountPage.urlPartial);\nexpect(mainNav.selectors.userMenu).to.be.visibleOnPage();\ncommonSteps.client.call(done);",
						"duration": 27944,
						"passed": true,
						"pending": false,
						"state": "passed",
						"err": {},
						"consoleErrors": [{
							"title": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Conversations page should serve the page using HTTPS (all)",
							"level": "SEVERE",
							"message": "https://s3.amazonaws.com/ki.js/51928/b4T.js 9:75995 Uncaught TypeError: Cannot set property 'scrollTop' of undefined"
						}],
						"nonFatalErrors": [],
						"passes": 2,
						"failures": 0,
						"screenshotPath": "/jenkins/workspace/MechaGodzilla Buyer Account Tests (QA)/lib/reporter/images/screenshots//buyer_user_account_spec/as_a_buyer_when_i_have_logged_in_and_navigate_to_the_my_conversations_page_should_serve_the_page_using_https_all.png",
						"url": "https://qa.1stdibs.com/my/conversations/"
					}]
				},
				"when I have logged in and navigate to the My Favorites page": {
					"testsForThisSuite": [{
						"title": "should serve the page using HTTPS (all)",
						"fullTitle": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Favorites page should serve the page using HTTPS (all)",
						"code": "commonSteps.client.navigateTo(urlHelper.createBaseComUrl());\nauthModal.login(userBuyers.users.standard.email, userBuyers.users.standard.password);\nmainNav.openUserMenu();\ncommonSteps.client.pause(2000);\ncommonSteps.client.waitAndClick(accountPage.selector);\ncommonSteps.verifyPartialUrl('https');\ncommonSteps.verifyPartialUrl(accountPage.urlPartial);\nexpect(mainNav.selectors.userMenu).to.be.visibleOnPage();\ncommonSteps.client.call(done);",
						"duration": 28133,
						"passed": true,
						"pending": false,
						"state": "passed",
						"err": {},
						"consoleErrors": [{
							"title": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Favorites page should serve the page using HTTPS (all)",
							"level": "SEVERE",
							"message": "https://s3.amazonaws.com/ki.js/51928/b4T.js 9:75995 Uncaught TypeError: Cannot set property 'scrollTop' of undefined"
						}],
						"nonFatalErrors": [],
						"passes": 3,
						"failures": 0,
						"screenshotPath": "/jenkins/workspace/MechaGodzilla Buyer Account Tests (QA)/lib/reporter/images/screenshots//buyer_user_account_spec/as_a_buyer_when_i_have_logged_in_and_navigate_to_the_my_favorites_page_should_serve_the_page_using_https_all.png",
						"url": "https://qa.1stdibs.com/favorites/items/"
					}]
				},
				"when I have logged in and navigate to the My Orders page": {
					"testsForThisSuite": [{
						"title": "should serve the page using HTTPS (all)",
						"fullTitle": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Orders page should serve the page using HTTPS (all)",
						"code": "commonSteps.client.navigateTo(urlHelper.createBaseComUrl());\nauthModal.login(userBuyers.users.standard.email, userBuyers.users.standard.password);\nmainNav.openUserMenu();\ncommonSteps.client.pause(2000);\ncommonSteps.client.waitAndClick(accountPage.selector);\ncommonSteps.verifyPartialUrl('https');\ncommonSteps.verifyPartialUrl(accountPage.urlPartial);\nexpect(mainNav.selectors.userMenu).to.be.visibleOnPage();\ncommonSteps.client.call(done);",
						"duration": 27235,
						"passed": true,
						"pending": false,
						"state": "passed",
						"err": {},
						"consoleErrors": [{
							"title": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Orders page should serve the page using HTTPS (all)",
							"level": "SEVERE",
							"message": "https://s3.amazonaws.com/ki.js/51928/b4T.js 9:75995 Uncaught TypeError: Cannot set property 'scrollTop' of undefined"
						}],
						"nonFatalErrors": [],
						"passes": 4,
						"failures": 0,
						"screenshotPath": "/jenkins/workspace/MechaGodzilla Buyer Account Tests (QA)/lib/reporter/images/screenshots//buyer_user_account_spec/as_a_buyer_when_i_have_logged_in_and_navigate_to_the_my_orders_page_should_serve_the_page_using_https_all.png",
						"url": "https://qa.1stdibs.com/my/orders/"
					}]
				}
			},
			"@forgot-password who has forgotten my password": {}
		},
		"tests": {
			"@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the Account Information page should serve the page using HTTPS (all)": {
				"title": "should serve the page using HTTPS (all)",
				"fullTitle": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the Account Information page should serve the page using HTTPS (all)",
				"code": "commonSteps.client.navigateTo(urlHelper.createBaseComUrl());\nauthModal.login(userBuyers.users.standard.email, userBuyers.users.standard.password);\nmainNav.openUserMenu();\ncommonSteps.client.pause(2000);\ncommonSteps.client.waitAndClick(accountPage.selector);\ncommonSteps.verifyPartialUrl('https');\ncommonSteps.verifyPartialUrl(accountPage.urlPartial);\nexpect(mainNav.selectors.userMenu).to.be.visibleOnPage();\ncommonSteps.client.call(done);",
				"duration": 22324,
				"passed": true,
				"pending": false,
				"state": "passed",
				"err": {},
				"consoleErrors": [],
				"nonFatalErrors": [],
				"passes": 1,
				"failures": 0,
				"screenshotPath": "/jenkins/workspace/MechaGodzilla Buyer Account Tests (QA)/lib/reporter/images/screenshots//buyer_user_account_spec/as_a_buyer_when_i_have_logged_in_and_navigate_to_the_account_information_page_should_serve_the_page_using_https_all.png",
				"url": "https://qa.1stdibs.com/my/account/"
			},
			"@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Conversations page should serve the page using HTTPS (all)": {
				"title": "should serve the page using HTTPS (all)",
				"fullTitle": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Conversations page should serve the page using HTTPS (all)",
				"code": "commonSteps.client.navigateTo(urlHelper.createBaseComUrl());\nauthModal.login(userBuyers.users.standard.email, userBuyers.users.standard.password);\nmainNav.openUserMenu();\ncommonSteps.client.pause(2000);\ncommonSteps.client.waitAndClick(accountPage.selector);\ncommonSteps.verifyPartialUrl('https');\ncommonSteps.verifyPartialUrl(accountPage.urlPartial);\nexpect(mainNav.selectors.userMenu).to.be.visibleOnPage();\ncommonSteps.client.call(done);",
				"duration": 27944,
				"passed": true,
				"pending": false,
				"state": "passed",
				"err": {},
				"consoleErrors": [{
					"title": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Conversations page should serve the page using HTTPS (all)",
					"level": "SEVERE",
					"message": "https://s3.amazonaws.com/ki.js/51928/b4T.js 9:75995 Uncaught TypeError: Cannot set property 'scrollTop' of undefined"
				}],
				"nonFatalErrors": [],
				"passes": 2,
				"failures": 0,
				"screenshotPath": "/jenkins/workspace/MechaGodzilla Buyer Account Tests (QA)/lib/reporter/images/screenshots//buyer_user_account_spec/as_a_buyer_when_i_have_logged_in_and_navigate_to_the_my_conversations_page_should_serve_the_page_using_https_all.png",
				"url": "https://qa.1stdibs.com/my/conversations/"
			},
			"@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Favorites page should serve the page using HTTPS (all)": {
				"title": "should serve the page using HTTPS (all)",
				"fullTitle": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Favorites page should serve the page using HTTPS (all)",
				"code": "commonSteps.client.navigateTo(urlHelper.createBaseComUrl());\nauthModal.login(userBuyers.users.standard.email, userBuyers.users.standard.password);\nmainNav.openUserMenu();\ncommonSteps.client.pause(2000);\ncommonSteps.client.waitAndClick(accountPage.selector);\ncommonSteps.verifyPartialUrl('https');\ncommonSteps.verifyPartialUrl(accountPage.urlPartial);\nexpect(mainNav.selectors.userMenu).to.be.visibleOnPage();\ncommonSteps.client.call(done);",
				"duration": 28133,
				"passed": true,
				"pending": false,
				"state": "passed",
				"err": {},
				"consoleErrors": [{
					"title": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Favorites page should serve the page using HTTPS (all)",
					"level": "SEVERE",
					"message": "https://s3.amazonaws.com/ki.js/51928/b4T.js 9:75995 Uncaught TypeError: Cannot set property 'scrollTop' of undefined"
				}],
				"nonFatalErrors": [],
				"passes": 3,
				"failures": 0,
				"screenshotPath": "/jenkins/workspace/MechaGodzilla Buyer Account Tests (QA)/lib/reporter/images/screenshots//buyer_user_account_spec/as_a_buyer_when_i_have_logged_in_and_navigate_to_the_my_favorites_page_should_serve_the_page_using_https_all.png",
				"url": "https://qa.1stdibs.com/favorites/items/"
			},
			"@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Orders page should serve the page using HTTPS (all)": {
				"title": "should serve the page using HTTPS (all)",
				"fullTitle": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Orders page should serve the page using HTTPS (all)",
				"code": "commonSteps.client.navigateTo(urlHelper.createBaseComUrl());\nauthModal.login(userBuyers.users.standard.email, userBuyers.users.standard.password);\nmainNav.openUserMenu();\ncommonSteps.client.pause(2000);\ncommonSteps.client.waitAndClick(accountPage.selector);\ncommonSteps.verifyPartialUrl('https');\ncommonSteps.verifyPartialUrl(accountPage.urlPartial);\nexpect(mainNav.selectors.userMenu).to.be.visibleOnPage();\ncommonSteps.client.call(done);",
				"duration": 27235,
				"passed": true,
				"pending": false,
				"state": "passed",
				"err": {},
				"consoleErrors": [{
					"title": "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Orders page should serve the page using HTTPS (all)",
					"level": "SEVERE",
					"message": "https://s3.amazonaws.com/ki.js/51928/b4T.js 9:75995 Uncaught TypeError: Cannot set property 'scrollTop' of undefined"
				}],
				"nonFatalErrors": [],
				"passes": 4,
				"failures": 0,
				"screenshotPath": "/jenkins/workspace/MechaGodzilla Buyer Account Tests (QA)/lib/reporter/images/screenshots//buyer_user_account_spec/as_a_buyer_when_i_have_logged_in_and_navigate_to_the_my_orders_page_should_serve_the_page_using_https_all.png",
				"url": "https://qa.1stdibs.com/my/orders/"
			}
		},
		"taggedTests": {
			"@buyer-user-account": ["@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the Account Information page should serve the page using HTTPS (all)", "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Conversations page should serve the page using HTTPS (all)", "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Favorites page should serve the page using HTTPS (all)", "@buyer @buyer-user-account @1stdibs As a Buyer when I have logged in and navigate to the My Orders page should serve the page using HTTPS (all)"]
		}
	},
	"timestamp": "Monday, June 29th 2015, 4:18:56 pm"
};