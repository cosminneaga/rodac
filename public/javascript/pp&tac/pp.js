let contentData = [{
        title: "Your privacy is critically important to us.",
        content: [
            { c1: "RoDac Limited is located at:" },
            { c2: "28 Knights Road, Derby, Derbyshire, DE73 5WW, United Kingdom" },
            { c3: "+447378403404" },
            { c4: "It is RoDac Limited’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to https://ro-dac.co.uk (hereinafter, “us”, “we”, or “https://ro-dac.co.uk”). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy (“Privacy Policy”) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources." },
            { c5: "This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions." }
        ]
    },
    {
        title: "Website Visitors",
        content: [
            { c1: "Like most website operators, RoDac Limited collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. RoDac Limited’s purpose in collecting non-personally identifying information is to better understand how RoDac Limited’s visitors use its website. From time to time, RoDac Limited may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website." },
            {
                c2: "RoDac Limited also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://ro-dac.co.uk/ blog posts. RoDac Limited only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below."
            }
        ]
    },
    {
        title: "Gathering of Personally-Identifying Information",
        content: [
            { c1: "Certain visitors to RoDac Limited’s websites choose to interact with RoDac Limited in ways that require Any Mover to gather personally-identifying information. The amount and type of information that RoDac Limited gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at https://ro-dac.co.uk/ to provide a username and email address." }
        ]
    },
    {
        title: "Security",
        content: [
            { c1: "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security." }
        ]
    },
    {
        title: "Advertisements",
        content: [
            { c1: "Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by RoDac Limited and does not cover the use of cookies by any advertisers." }
        ]
    },
    {
        title: "Links To External Sites",
        content: [
            { c1: "Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit." },
            { c2: "We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services." }
        ]
    },
    {
        title: "Aggregated Statistics",
        content: [
            { c1: "RoDac Limited may collect statistics about the behavior of visitors to its website. RoDac Limited may display this information publicly or provide it to others. However, RoDac Limited does not disclose your personally-identifying information." }
        ]
    },
    {
        title: "Cookies",
        content: [
            { c1: "To enrich and perfect your online experience, RoDac Limited  uses “Cookies”, similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer." },
            { c2: "A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. RoDac Limited uses cookies to help RoDac Limited identify and track visitors, their usage of https://ro-dac.co.uk/, and their website access preferences. RoDac Limited visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using RoDac Limited’s websites, with the drawback that certain features of RoDac Limited’s websites may not function properly without the aid of cookies." },
            { c3: "By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Rodac Limited’s use of cookies." }
        ]
    },
    {
        title: "Privacy Policy Changes",
        content: [
            { c1: "Although most changes are likely to be minor, RoDac Limited may change its Privacy Policy from time to time, and in RoDac Limited’s sole discretion. RoDac Limited encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change." }
        ]
    },
    {
        title: "Credit & Contact Information",
        content: [
            { c1: "This privacy policy was created at ro-dac.co.uk. If you have any questions about this Privacy Policy, please contact us via email or phone." }
        ]
    }
];


let contentDiv = document.getElementById('content-section');

for (var i = 0; i < contentData.length; i++) {
    let title = document.createElement('h2');
    title.innerHTML = contentData[i].title;
    contentDiv.appendChild(title);
    contentData[i].content.forEach(el => {
        let content = document.createElement('p');
        content.innerHTML = Object.values(el);
        contentDiv.appendChild(content);
    });

}