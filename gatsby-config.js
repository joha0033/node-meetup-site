module.exports = {
	siteMetadata: {
		title: "Node.js Meetup - Denver/Fort Collins/Boulder",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`,
			},
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				background_color: "#663399",
				theme_color: "#663399",
				display: "minimal-ui",
				icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
			},
		},
		{
			resolve: "gatsby-source-meetup",
			options: {
			  // Learn about environment variables: https://gatsby.app/env-vars
			  // Your Meetup.com API key can be retrieved here: https://secure.meetup.com/fr-FR/meetup_api/key/
			  key: "28751934723571b9394b20413a71",
			  // Mandatory: the URL name of a Meetup Group.
			  // See the URL of the group page, e.g. https://www.meetup.com/fr-FR/jamstack-paris
			  groupUrlName: "Node-js-denver-boulder",
			  // Optional parameters for retrieving Events, see full documentation at
			  // https://www.meetup.com/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
				//   status: "upcoming",
			  desc: "false",
			  page: 3
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
};
