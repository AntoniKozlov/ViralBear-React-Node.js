import React from 'react';
import classNames from 'classnames';
import {Link, withRouter} from 'react-router-dom';
import {Grid, Typography} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import {useStyles} from './PrivatePolicy.Styles';

const PrivatePolicy = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.paddingTopBottom}>
            <Grid item container xs={10} direction="column" className={classNames(classes.marginAuto, classes.paddingTopBottom)}>
                <Paper className={classes.paddingTopBottom}>
                    <Grid item xs={8} className={classNames(classes.flex, classes.centeredContent, classes.marginAuto)}>
                        <Typography variant="h4">Privacy Statement</Typography>
                    </Grid>
                    <Grid item xs={8} className={classes.marginAuto}>
                        <Typography variant="h5" gutterBottom>PRIVACY POLICY</Typography>
                        <Typography variant="body1" gutterBottom>
                            Thank you for visiting the Launchpad Entertainment Website,
                            <Link className={classes.link} to="/"> www.viralbear.com</Link> Launchpad provides a
                            unique way to keep in touch with Launchpad Entertainment (“Launchpad”). Watch our viral
                            videos, read blog posts, share content and join the conversation with the Launchpad
                            community.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            The privacy policy set forth below are applicable to the website located at <Link
                            className={classes.link} to="/">www.viralbear.com</Link>, its operational host Launchpad
                            Entertainment, LLC., and each of their respective affiliates, parents, subsidiaries,
                            licensees, and assigns (collectively hereinafter referred to, alternatively, as
                            “Launchpad,” the “Website,” “we,” “us,” “our” or similar identifying pronouns). Launchpad
                            respects each individual’s right to personal privacy. We will collect and use information
                            through our Website and from users submitting materials to us and in any other way
                            disclosed in this Privacy Policy (“Policy”). Launchpad has no responsibility for content
                            on websites other than<Link className={classes.link} to="/"> www.viralbear.com</Link>,
                            you may come across while navigating the Website. Similarly, Launchpad has no
                            responsibility for content accessed on or through the Website that is created or posted
                            by anyone other than authorized Launchpad employees, agents and/or representatives.
                            This statement applies solely to information collected on or through the Website from
                            all users (“Users”) and others who access this Website.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Please read this Privacy Policy as well as our
                            <Link className={classes.link} to="/termsOfUse"> Terms of Use </Link>
                            before browsing or using the Website.
                        </Typography>

                        <Typography variant="h6" gutterBottom>How Information Is Collected</Typography>
                        <Typography variant="body1" gutterBottom>
                            By using the Website, you are agreeing to our
                            <Link className={classes.link} to="/termsOfUse"> Terms of Use</Link> and Privacy Policy.
                            Launchpad collects information, such as your name, phone number,
                            email address, age group, gender, and other, through our submissions page and through
                            the emails and messages Users send us. As part of our service we collect certain information
                            in order to learn from our visitors and improve our services. Information may be provided
                            directly by you or through your usage of services and the Website, including third
                            party websites and advertising linked or accessed from our Website. Such information
                            may be gathered in a number of ways and from many sources, including without limitation,
                            from a membership account, sign-in, IP address, service usage and views to specific content,
                            visits to linked third party websites and/or advertising, device-specific information
                            (e.g. operating system, mobile network, related device identifiers, system activity,
                            settings and the like), browser web storage and similar application data caches, cookies
                            and other similar identifiers.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Users’ Rights</Typography>
                        <Typography variant="body1" gutterBottom>
                            Users are not required to register or create an account in order to use the Website, and all
                            Users have access to all areas of the Website intended for use by Users. Users may use the
                            Website to submit videos and images to Launchpad. These videos will not be available on the
                            Website until the content is approved and published by Launchpad at its sole discretion.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Technical Information We May Collect</Typography>
                        <Typography variant="body1" gutterBottom>
                            We may collect the cookies and other device identifier information (such as the device type,
                            operating system type, etc.), the time spent viewing the Website, the content you view,
                            content shares, favorite items, etc. We may collect this information through, but not
                            limited to, click stream tracking and automatic logging files and we use this information
                            about you and your device to ensure that the Website is optimized for access by any and
                            all devices used to access the Website.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Information Launchpad May Share</Typography>
                        <Typography variant="body1" gutterBottom>
                            In order to provide a premiere level of service, Launchpad works with various third party
                            vendors, partners, advertisers and other service providers in different industries and types
                            of business. Except as otherwise prohibited by Internet privacy legislation, Launchpad
                            reserves the right to share information it collects from the Website to its trusted
                            partners. Launchpad may also share information if we have a good-faith belief that access,
                            use, preservation or disclosure of the information is reasonably necessary (i) to enforce the
                            <Link className={classes.link} to="/termsOfUse"> Terms of Use</Link>
                            ; (ii) to investigate, prevent or take action in connection with potential violations of the
                            <Link className={classes.link} to="/termsOfUse"> Terms of Use </Link>
                            or any potentially fraudulent, threatening or illegal activities; (iii) to investigate,
                            prevent or take action in connection with potential technical issues; (iv) to respond to
                            claims that any such information violates the rights of others; (v) to protect the rights,
                            property or personal safety of Launchpad, its affiliates, parent, subsidiaries, suppliers
                            and their respective directors, officers, employees and agents and/or users of or visitors
                            to the Website, and the public; (vi) to respond to court orders, subpoenas or otherwise
                            exercise Launchpad’s legal rights and/or defend against legal claims; and (vii) as
                            otherwise required by any applicable law, regulation, or enforceable judicial,
                            administrative or governmental request.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Disclosure of Information in the event of Business
                            Transfer</Typography>
                        <Typography variant="body1" gutterBottom>
                            In the event that Launchpad is involved in a merger, bankruptcy, acquisition, reorganization
                            or sale of assets, your information may be sold or transferred as part of that transaction.
                            The covenants in this Privacy Policy will apply to your information as transferred to the
                            entity that results from that transaction.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Disclosure to Third-Party Service Providers</Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad may use a variety of third-party services to help provide services on the Website
                            and to help us understand the use of the Website, such as Google Analytics for application
                            statistics, among others. These third-party service providers may collect information sent
                            by your browser as part of a web page request, such as cookies or your IP address.
                        </Typography>

                        <Typography variant="h6" gutterBottom>External Links</Typography>
                        <Typography variant="body1" gutterBottom>
                            We may offer links to third-party or Launchpad-affiliated Websites. Should Users thereafter
                            click links to other third-party websites, we encourage them to read the privacy policies
                            and<Link className={classes.link} to="/termsOfUse"> Terms of Use </Link>
                            of those respective third-party websites as their standards may differ from ours.
                            Launchpad is not responsible for any content accessed through external links.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Sharing Content with Friends</Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad offers a bookmarking and sharing tool on our web pages powered by third-party
                            application service providers, such as YouTube, Facebook, Twitter, Instagram, HighTail, etc.
                            Please see the respective third-party’s privacy policy for their standards and policies as
                            they may differ from ours.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Device Identifiers</Typography>
                        <Typography variant="body1" gutterBottom>
                            When you use a device like a computer, tablet or phone to access our Website, Launchpad may
                            access, collect, and/or store one or more “device identifiers” from your device, including
                            without limitation, your IP address, device model/type, OS version, and UDID numbers. The
                            purpose of this is to help prevent malicious users from interacting with the Launchpad
                            Website community in an inappropriate manner, and to make efforts to ensure the Website
                            is optimized accordingly.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Newsletters, Email Communications, and Partner Offers</Typography>
                        <Typography variant="body1" gutterBottom>
                            When submitting and uploading content through the Website, Users may be provided an
                            opportunity to receive email communications from Launchpad and to receive offers
                            from our partners. Occasionally, we may send you special offers or opportunities from
                            our partners.
                        </Typography>

                        <Typography variant="body1" gutterBottom>
                            Certain account-related announcements and administrative messages are necessary as a
                            Launchpad subscriber and you will not be able to opt-out of these required messages.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Advertising</Typography>
                        <Typography variant="body1" gutterBottom>
                            We may use information you provide, text, photos, videos, and metadata to make our Website
                            advertising, if any, more contextually relevant. Advertising dollars help Launchpad make
                            money and if the ads are more contextually relevant, they will be more interesting to
                            our Users. However, once you leave the Launchpad Website and are interacting with an
                            advertiser, we are not responsible for your dealings with them. Use your own discretion.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Kids Policy</Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad does not actively market to children, and we never knowingly ask a child under 13
                            to divulge personal information. You must be at least 13 years of age to access the Website,
                            and at least 18 years of age to submit, share and upload content and participate on the
                            Website. Any inappropriate content should be immediately reported to <b>Licensing@viralbear.ru</b>
                        </Typography>

                        <Typography variant="h6" gutterBottom>Disclaimer of Liability; User Obligation to Protect
                            Information</Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad is not responsible or liable for information it obtains about its users through
                            the Website or which it shares pursuant to the terms of this Privacy Policy and its
                            <Link className={classes.link} to="/termsOfUse"> Terms of Use</Link>.
                            Notwithstanding the foregoing, we do regularly review our compliance with our Privacy Policy
                            and aim to protect our Website and our Users from unauthorized access to or unauthorized
                            alteration, copying, disclosure or destruction of information we hold. Some of the
                            measures we may take include the periodic review of our information collection, storage
                            and processing practices (including physical security measures) to guard against unauthorized
                            access to systems and restricting access to personal information to those employees,
                            contractors, partners and agents who need to know that information in order to process
                            it for us, and who are subject to contractual confidentiality obligations and may be
                            disciplined or terminated if they fail to meet these obligations. While we reserve the right
                            to take appropriate confidentiality and security measures, you should not have any
                            expectation of privacy when using the Website or the Internet generally. Internet users may
                            best protect their privacy through controlled disclosure of personal information. In order
                            to keep their information private, users need to be careful what they submit, provide,
                            disclose, review and look at online, including in connection with the Website. Should you
                            wish to enhance your privacy, you may wish to explore higher security settings on your
                            computer. You may also decide to set your browser to block cookies; however,
                            please understand that many of our services may not function properly if your cookies are
                            disabled. If you are a parent, you may elect to use parental control settings on your device
                            to prevent, limit or control access to the Website.
                        </Typography>

                        <Typography variant="h6" gutterBottom>Changes to Privacy Policy</Typography>
                        <Typography variant="body1" gutterBottom>
                            By using the Website, you are agreeing to our
                            <Link className={classes.link} to="/termsOfUse"> Terms of Use </Link>
                            and to the terms of our Privacy Policy as set forth herein. We reserve the right to make
                            changes to our <Link className={classes.link} to="/termsOfUse">Terms of Use</Link> and our
                            Privacy Policy at any time. It is your responsibility to periodically review the
                            <Link className={classes.link} to="/termsOfUse"> Terms of Use </Link>
                            and Privacy Policy and be aware of our current terms, Launchpad’s rights and your
                            responsibilities and duties in connection with protecting any information you wish to keep
                            private or confidential. Unless otherwise specified, any changes shall be effective when
                            they are posted, and your continued use of the Website following the posting of changes
                            will mean that you accept and agree to the changes.
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withRouter(PrivatePolicy)
