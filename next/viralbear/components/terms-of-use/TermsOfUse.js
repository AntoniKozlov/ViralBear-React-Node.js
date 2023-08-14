import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import {Grid, Typography} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import {useStyles} from './TermsOfUse.module.styles';

const TermsOfUse = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.paddingTopBottom}>
            <Grid item container xs={10} direction="column"
                  className={classNames(classes.marginAuto, classes.paddingTopBottom)}>
                <Paper className={classes.paddingTopBottom}>
                    <Grid item xs={8} className={classNames(classes.flex, classes.centeredContent, classes.marginAuto)}>
                        <Typography variant="h4">Terms of Use</Typography>
                    </Grid>
                    <Grid item xs={8} className={classes.marginAuto}>
                        <Typography variant="body1" gutterBottom>
                            The policies below are applicable to the website located at
                            <Link className={classes.link} href="/"> www.viralbear.com</Link>,
                            its operational host Launchpad Entertainment, LLC., and each of their respective affiliates,
                            parents, subsidiaries, licensees, websites, and assigns, (collectively hereinafter referred
                            to, alternatively, as “Launchpad,” the “Site,” “we,” “us,” “our” or similar identifying
                            pronouns). Please read these Terms of Use carefully to ensure your legal, safe, and
                            enjoyable use of the Site. They contain the legal terms and conditions that govern your use
                            of the services provided to you by the Site and are a binding agreement with you, just as if
                            you had signed this document. In using the Site, you affirm that you are at least 18 years
                            of age, or an emancipated minor, or possess legal parental or guardian consent, and you are
                            fully able and competent to enter into, abide by and comply with the terms, conditions,
                            obligations, affirmations, representations, and warranties set forth in these Terms of Use.
                        </Typography>

                        <Typography variant="h6" gutterBottom>A. THE SERVICES; AUTHORIZATION TO USE:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Please read these terms and policies (collectively hereinafter referred to, alternatively,
                            as “Terms of Use” or “Terms of Service”) as well as the Launchpad Entertainment <u>Privacy
                            Policy</u> (referred to herein as “<u>Privacy Policy”</u>) before using the Launchpad
                            Entertainment
                            website (“Launchpad website,” “Launchpad site,” “website,” or “site”) or any of Launchpad’s
                            products, software, data or other applications (collectively referred to as the “Services”).
                            <u>By using the Services, you (“You” or “Your”) are agreeing to the Terms of Use. If You do
                                not
                                agree to these Terms of Use, or if you do not have the authority to agree, You may not
                                use
                                the Services.</u> Your use of the Services includes the ability and consent to enter
                            into
                            agreements electronically. YOU ACKNOWLEDGE THAT YOUR ELECTRONIC SUBMISSION(S) CONSTITUTES
                            YOUR AGREEMENT AND INTENT TO BE LEGALLY BOUND BY THE TERMS HEREIN. Launchpad (as defined
                            herein) may, in its sole discretion, modify or revise these Terms of Use and policies at any
                            time, and You agree to be bound by such modifications or revisions. Nothing in these Terms
                            of Use shall be deemed to confer any third-party rights or benefits. These Terms of Use
                            apply to all users of the Service, including users who are also contributors of Content (as
                            hereinafter defined) on the Service.
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom><b><u>Arbitration Notice:</u></b></Typography>
                        <Typography variant="body2" gutterBottom>
                            <b>YOU AGREE THAT DISPUTES (EXCEPT FOR CERTAIN TYPES OF DISPUTES DEFINED IN PARAGRAPH AA
                                BELOW)
                                BETWEEN YOU AND LAUNCHPAD, ITS PARENTS, AFFILIATES, OR ASSIGNS WILL BE RESOLVED BY
                                BINDING,
                                INDIVIDUAL ARBITRATION, AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION
                                LAWSUIT OR
                                CLASS-WIDE ARBITRATION. YOU MAY OPT OUT OF THIS AGREEMENT TO ARBITRATE BY FOLLOWING THE
                                PROCEDURES DESCRIBED IN THE ARBITRATION SECTION AA BELOW.</b>
                        </Typography>

                        <Typography variant="h6" gutterBottom>B. CONTENT:</Typography>
                        <Typography variant="body1" gutterBottom>
                            “Content” shall mean: any text, messages, ideas, concepts, pitches, suggestions, stories,
                            screenplays, treatments, formats, artwork, photographs, drawings, graphics, videos, and all
                            forms of audiovisual works and recordings, and each element contained therein, including,
                            without limitation, any and all copyright and other intellectual property rights thereto, as
                            well as all original materials created by You which are incorporated therein, including,
                            without limitation, all artwork, dialogue, literary material, music and musical compositions
                            (including lyrics), sound recordings, characterizations, interactive features, Your and/or
                            other persons’ names, likenesses, voices, usernames, profiles, actions, appearances,
                            performances and/or other biographical information or material, and/or other similar
                            materials that are submitted, posted, uploaded, embedded, displayed, distributed,
                            communicated or otherwise added to or through the Services.
                        </Typography>

                        <Typography variant="h6" gutterBottom>C. PERPETUAL ROYALTY-FREE, EXCLUSIVE WORLDWIDE GRANT OF
                            RIGHTS:</Typography>
                        <Typography variant="body1" gutterBottom>
                            By adding or uploading Content to Launchpad either to or through the Services, You are
                            transferring exclusive ownership of the Content to Launchpad. Said transfer irrevocably
                            grants Launchpad (for use in the Program or any program or use) the sole and exclusive
                            worldwide ownership of all right, title and interest, (fully-paid, royalty-free, licensable
                            and transferable (in whole or part) in and to this Content and all elements thereof and the
                            fully-paid, royalty-free, licensable and transferable (in whole or part) worldwide license
                            to all embedded third-party copyrights, trademarks, patents, trade secrets, privacy and
                            publicity rights and other intellectual and industrial property rights that You own or
                            control, to use, reproduce, transmit, display, exhibit, distribute, index, comment on,
                            modify, edit, adapt, translate, create derivative works based upon, perform and otherwise
                            exploit such Content, in whole or in part, in Launchpad’s sole discretion, in all media
                            formats and channels now known or hereafter devised (including, but not limited to, on
                            websites, cable and broadcast television networks and stations, on broadband and wireless
                            platforms, commercials, products and services, on physical media, and in theatrical release)
                            for any and all purposes including, without limitation, entertainment, news, advertising,
                            promotional, marketing, publicity, trade or commercial purposes, all without further notice
                            to You or the foregoing third-party(ies), with or without attribution, and without the
                            requirement of any permission from or payment to You or to any other person or entity.
                        </Typography>

                        <Typography variant="h6" gutterBottom>D. ADDITIONAL USE OF THE CONTENT:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Your Content, once submitted to Launchpad, along with Your first name and last name may be
                            (in addition to all other rights granted herein) posted on the Launchpad website, and also
                            on pages of other social media sites, such as, without limitation, Facebook, YouTube,
                            Instagram, TikTok, Twitter and may be used by other Launchpad, and/or its partners or
                            affiliates, such as without limitation, all media known or unknown including websites,
                            commercials, theatrical, television programs, and/or its licensees or assigns (collectively
                            referred to as the “Sites” or “Launchpad”). Once Your submissions are posted on the Sites
                            for public viewing, they may be shared by third party users of the Sites.
                            Review Launchpad’s <u>Privacy Policy</u> to understand how Launchpad collects and uses
                            personally identifiable information.
                        </Typography>

                        <Typography variant="h6" gutterBottom>E. NAME AND LIKENESS:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Without limiting the foregoing grant of rights, You understand and agree that Your grant
                            also includes the right to use Your name, voice, likeness, biographical information,
                            appearance and performance in and in connection with the Content or video and/or the
                            Programs, as “Programs” is defined below (collectively, the “Personal Rights”). Your grant
                            includes use of Your Personal Rights and any use Launchpad may make of the Content,
                            including, without limitation, any use of the Content in and/or in connection with, and/or
                            any other program(s), format(s), production(s), commercials, commercial tie-ins, product
                            endorsements, licensing, product merchandising and/or merchandising of any kind, whether or
                            not related to Launchpad and also includes, without limitation, the right to use the Content
                            and the Personal Rights to publicize, advertise and promote any and all of the Programs
                            and/or broadcaster’s or other applicable exhibitor’s or transmission entity’s respective
                            programs, products or services, including, inter alia, transmission by satellite and over
                            the Internet (collectively the “Programs”) in any and all media, whether now known or
                            hereafter devised, including, without limitation, all forms of home video (including, but
                            not limited to, videocassettes, DVDs, VOD, digital recordings or transmission, etc.);
                            theatrical motion pictures; compilations; printed media; the Internet, websites and any and
                            all digitized versions (including, without limitation, any sponsored or commercial use in
                            connection with online banner, “pre roll,” “post roll,” and/or targeted advertising, graphic
                            overlays and watermarking (and any other modifications or edits to the Content itself)
                            digital and electronic devices (including, but not limited to gaming devices such as
                            entertainment stations and handheld devices, such as, Nintendo, Playstation, Xbox, Gameboy,
                            DS, PSP, cell phones, tablets, etc.); outdoor spaces, public media, private media; all new
                            media and future technologies and all forms of television, (e.g., free, pay, pay-per-view,
                            cable, satellite, OTT or otherwise) throughout the universe in perpetuity and in any and all
                            advertising, publicity and promotion relating to any of the foregoing (all of the foregoing,
                            collectively, “Commercial Rights”). You also understand and agree that Launchpad may sell,
                            assign or license the rights hereunder (in whole or in part) to any third party in its sole
                            discretion and without providing any further consideration or notice to You.
                        </Typography>

                        <Typography variant="h6" gutterBottom>F. YOUR PERSONAL USE:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Further to the foregoing, Launchpad grants to You a limited, nontransferable, noncommercial,
                            personal use license in the Content for the purpose of personal use, including using the
                            Content in Your personal social networking account(s) online (which should be set to
                            private). This personal use license permits Your use of the Content in connection with no
                            more than one (1) account per social networking site. This license does not in any way
                            permit You to license, sell, transfer, or otherwise commercialize or monetize the Content
                            with any third-party, including without limitation exhibiting and/or distributing the
                            Content except as described in this paragraph, and/or using the Content or any portion
                            thereof as a submission to any third-party contests.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            To the extent that Launchpad solicits Content through features or activities on or through
                            the Services that require the use of its copyrighted works (in whole or in part), Launchpad
                            hereby grants You a non-exclusive license to create a derivative work using Launchpad’s its
                            copyrighted works (in whole or in part) as required (but only as required, and only for the
                            purpose of creating Your Content); provided however, that such license shall be conditioned
                            upon Your assignment of all rights in the work You create to Launchpad. If such rights are
                            not assigned to Launchpad, Your license to create derivative works using Launchpad’s
                            copyrighted works (in whole or in part) shall be null and void. You agree to the foregoing
                            grant of rights, consents, agreements and assignments whether or not Your Content is used by
                            Launchpad.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            In the event that Launchpad offers downloads of software on the site and You download such
                            software, the software, including any files, images incorporated in or generated by the
                            software, and data accompanying the software (collectively, the “Software”) are licensed to
                            You by Launchpad or third-party licensors for Your limited, personal, noncommercial home use
                            only. Launchpad does not transfer title to the Software to You. Except as permitted under
                            applicable law, You may not distribute or otherwise exploit the Software or decompile,
                            reverse engineer, disassemble, adapt it, or otherwise reduce the Software to a
                            human-readable form, except to the extent permitted by applicable law.
                        </Typography>

                        <Typography variant="h6" gutterBottom>G. CONSIDERATION:</Typography>
                        <Typography variant="body1" gutterBottom>
                            You acknowledge that these Terms of Use are supported by reasonable and valuable
                            consideration, the receipt and adequacy of which are hereby acknowledged. Without limiting
                            the generality of the foregoing, You acknowledge that such consideration includes, among
                            other things, Your use of the Services and receipt of data, materials and information
                            available at or through the Services, the possibility of Launchpad’s use or display and/or
                            distribution of Your Content and the possibility of the publicity and promotion from
                            Launchpad’s use or display and/or distribution of Your Content.
                        </Typography>

                        <Typography variant="h6" gutterBottom>H. MORAL RIGHTS:</Typography>
                        <Typography variant="body1" gutterBottom>
                            To the extent any “moral rights,” “ancillary rights,” or similar rights (“Moral Rights”) in
                            or to the Content exist and are not exclusively owned by Launchpad and to the extent You are
                            able to do so under applicable law, You agree not to enforce any such rights as to Launchpad
                            its licensees, distributors, agents, representatives and other authorized users, and You
                            shall procure the same agreement not to enforce from any others who may possess such rights.
                            To the extent such an agreement is unenforceable, You hereby give a Moral Rights Consent. To
                            the extent any other person has Moral Rights in or to the Content, You must obtain a Moral
                            Rights Consent from that person and provide it on request to Launchpad. “Moral Rights
                            Consent” means a waiver of moral rights to the maximum extent permitted by applicable law
                            and an unconditional consent to any act or omission in relation to the Content by or on
                            behalf of Launchpad, or any licensee or subsequent owner of copyright in the Content,
                            including an act or omission which would, but for these Terms of Use, infringe Your moral
                            rights. Without limiting the scope of the license herein or any future grant of rights,
                            consents, agreements, assignments, and waivers You may make with respect to the Content, and
                            to the extent allowed by applicable law, You hereby ratify any prior grant of rights,
                            consents, agreements, assignments and waivers made by You with respect to Content submitted
                            by You to Launchpad. I. USE OF CONTENT: You agree that Launchpad and its respective parents,
                            successors, Launchpad’s and assigns, may make any changes, edits, commentary, or additions
                            to the Content prepared by you with or without attribution to you. You acknowledge, consent,
                            and accept the risk that, to the extent Launchpad uses the Content, that such use is
                            expected to, and may, include (without limitation) a portrayal, commentary and/or other
                            discussion of the Content, and any or all individuals appearing, or referenced to, in the
                            Content. You acknowledge and agree that any of the foregoing may be favorable or
                            unfavorable, and/or actual or fictional, and may or may not be derogatory, surprising,
                            defamatory, disparaging and/or embarrassing to the Content and/or individuals appearing, or
                            referenced to, in the Content, and/or could portray the Content and/or such individuals in a
                            negative, unflattering or false light or otherwise subject any of the foregoing to
                            embarrassment, ridicule, emotional distress, and/or damage to reputation. Without limiting
                            any of the terms and conditions hereunder, or Launchpad’s rights to exploit the Content in
                            any manner contemplated herein, you acknowledge that it is familiar with Launchpad and any
                            other productions, and the manner in which materials similar to the Content have previously
                            been used in connection with the Production.
                        </Typography>

                        <Typography variant="h6" gutterBottom>J. TIME LIMITATION ON CLAIMS:</Typography>
                        <Typography variant="body1" gutterBottom>
                            You agree that any claim you may have arising out of or related to your use of the Services
                            or relationship with Launchpad, must be filed within <u><b>six months</b></u> after such a
                            claim arose;
                            otherwise, Your claim is permanently barred.
                        </Typography>

                        <Typography variant="h6" gutterBottom>K. ENTIRE AGREEMENT</Typography>
                        <Typography variant="body1" gutterBottom>
                            These Terms of Use, together with the Launchpad’s <u>Privacy Policy</u>, which is
                            incorporated
                            herein by reference, are the entire and exclusive agreement between Launchpad and You
                            regarding the Services, and these Terms supersede and replace any prior agreements between
                            us regarding the Services. No person or company will be third party beneficiaries to the
                            Terms of Use.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad may revise these Terms of Use from time to time; the most current version will
                            always be on the Launchpad website by continuing to access or use the Services after those
                            revisions become effective, You agree to be bound by the revised Terms.
                        </Typography>

                        <Typography variant="h6" gutterBottom>L. REPRESENTATIONS AND WARRANTIES:</Typography>
                        <ol type="a">
                            <li><Typography variant="body1" gutterBottom>You warrant that You have not submitted or
                                granted the rights to the Content to any
                                third party, including without limitation, any television or media entity or to any
                                website or internet provider, except by private transmission to Your family solely
                                for their own private use and with no other rights granted to the Content.</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>You further represent and warrant that: (1) a)
                                You are the sole and exclusive owner
                                of
                                the Content that You upload or submit, b) You have the full right, power and
                                authority
                                to enter into this agreement and to grant all rights granted herein and c) You agree
                                not
                                take any action to impair the rights You are granting herein; (2) the making,
                                exhibition, distribution and/or other exploitation of the Content in connection with
                                any
                                Program(s) does not violate or infringe the rights of others or constitute a
                                defamation
                                or invasion of their privacy or right of publicity; (3) have not falsely identified
                                any
                                individual involved in the shooting of the Content or any individual whose
                                appearance or
                                voice is incorporated in the Content; (4) You have obtained all necessary consents
                                and
                                permissions required for Launchpad to fully exploit the rights granted hereunder
                                (excluding any music owned by any third parties, if any) and that all executed third
                                party consents and/or releases which You provide contain true and accurate contact
                                information for the signing party(ies) and have been actually signed by the legal
                                owner
                                of the rights being granted pursuant to such consents and/or releases and that
                                anyone
                                featured who is under 18 years old is either a member of Your immediate family under
                                Your authority and/or their legal guardian has granted written consent (5) the
                                Content
                                and its use by Launchpad does not fall under the jurisdiction of any guild or union
                                (for
                                example, the DGA, SAG-AFTRA, the WGA, etc.) (6) The Content and Your addition
                                thereof to
                                the website, Services, or otherwise conforms to the requirements of these Terms of
                                Use,
                                (7) that all material, themes, compositions, works, writings, ideas, and all other
                                matter created, written, composed, prepared, submitted and included in the Content
                                or
                                the preparation, production or editing shall be wholly original and shall not be
                                copied
                                in whole or in part from any other work, (8) that You have obtained permission and
                                clearance from all persons whose names, likeness and voices appear within the
                                Content
                                including, but limited to, for use in all forms of advertising associated with the
                                Content; that no part of the Content will violate the rights of privacy of or
                                constitute
                                libel or slander against any person, firm, or corporation, (9) that the Content will
                                not
                                infringe upon the copyright, literary, dramatic or photoplay rights of any person,
                                firm
                                or corporation, (10) that the Content is not subject to any claim, litigation and/or
                                obligation which will or might prevent Content from fully keeping and performing all
                                the
                                covenants and conditions to be kept or performed by it hereunder, that it has not
                                made
                                and will not make any license, grant, or assignment or do or omit to do any act
                                which
                                will or might conflict with or impair the complete enjoyment of the rights and
                                privileges granted to Launchpad hereunder.</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>To the extent that any Content You add or
                                upload through the Services contains
                                original
                                songs or recordings, You hereby represent that You are either a member of ASCAP,
                                BMI,
                                SESAC or other applicable mechanical performing rights and/or copyright owners
                                society
                                and that You have the right to license to Launchpad at no cost, all musical
                                compositions
                                (including lyrics) and the sound recordings, or that otherwise the sound recordings
                                contained in such Content are available for licensing to Launchpad (and its
                                subsidiaries, affiliates, licensees, distributors, agents, representatives and other
                                authorized users) directly from such societies, or that You otherwise may grant
                                Launchpad all such rights. Notwithstanding the foregoing, regardless of whether You
                                are
                                a member of any rights society, You grant the foregoing license and rights with
                                respect
                                to each and every musical composition in which You have the authority or right to
                                grant
                                such rights (including lyrics) and sound recordings contained in such Content. In
                                the
                                event You cannot grant such rights to the sound recordings You agree that Launchpad
                                may
                                remove the Content or alter the Content to remove and/or replace the sound
                                recordings at
                                Launchpad’s sole election.</Typography>
                            </li>
                        </ol>


                        <Typography variant="h6" gutterBottom>M. INDEMNIFICATIONS:</Typography>
                        <Typography variant="body1" gutterBottom>
                            You hereby agree to indemnify, defend and hold Launchpad, and its affiliates, licensees,
                            grantees, successors and assignees, including but not limited to, programs, broadcasters,
                            and the respective officers, directors, employees and representatives of each of the
                            foregoing entities, companies, and organizations and any and all other related person(s) or
                            entity(ies), harmless against any and all losses, claims, debts, demands, liabilities,
                            attorneys’ fees and expenses, and all other damages or costs arising from or related to: a)
                            any breach of the representations or warranties made herein or the falsity of any of such
                            representations or warranties, including, without limitation, any and all claims by third
                            parties that their signature(s) has or have been forged or otherwise obtained by any
                            improper means, and b) the use by grantees of any of the rights and permissions You have
                            granted herein, and c); and any act or omission by You in connection with Your submissions
                            or application for or an appearance in the Program.
                        </Typography>
                        <Typography variant="body1" gutterBottom>If You have created an account with Launchpad or
                            otherwise use the Services, You are responsible for maintaining the confidentiality of Your
                            username(s), password(s), and Your account(s), as well as all activities that occur under
                            Your account(s). You hereby agree to indemnify, defend, and hold Launchpad, its group
                            undertakings, and its group undertakings licensors, licensees, distributors, agents,
                            partners, representatives and other authorized users, and each of the foregoing entities
                            respective resellers, distributors, service providers and suppliers, and all of the
                            foregoing entities respective officers, directors, owners, employees, agents,
                            representatives and assigns (collectively, the “Indemnified Parties”) harmless from and
                            against any and all losses, damages, liabilities and costs (including settlement costs and
                            any legal or other fees and expenses for investigating or defending any actions or
                            threatened actions) incurred by the Indemnified Parties in connection with any claim arising
                            out of any breach by You of these Terms of Use or claims arising from Your use of the
                            Services and/or Your account(s). You shall use Your best efforts to cooperate with Launchpad
                            in the defense of any claim. Launchpad reserves the right, at its own expense, to employ
                            separate counsel and assume the exclusive defense and control of any matter otherwise
                            subject to indemnification by You.
                        </Typography>

                        <Typography variant="h6" gutterBottom>N. DISCLAIMERS:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad cannot and do not assume any liability from user Content posted to the site and/or
                            affiliated sites. Use of the Launchpad website and the Services it provides are at Your sole
                            risk. Launchpad cannot and will not guarantee up-time, accuracy of content, or future
                            features, although Launchpad will strive to meet its own exacting standards and will
                            encourage the community to be self-policing. The Services are in continuing revision and
                            improvement, so bugs and errors should be expected occasionally. Downloading any content
                            from the site will be done at Your own risk and Launchpad is not responsible for any harm
                            that may be done to Your computer. Special needs users should consult their physician before
                            using the site. Launchpad is not responsible for any defamatory, unlawful, pornographic, or
                            otherwise offensive or infringing material that You may find while navigating the Launchpad
                            website and affiliates. Launchpad is not required to screen any Content on the Launchpad
                            website but reserve the right to remove or edit any Content without prior notification at
                            any time. Launchpad encourages You to report infractions or infringing content to
                            www.viralbear.com. Launchpad is not responsible for any loss of data from failure of
                            Launchpad’s computer systems, storage systems or for any other reason. Members should create
                            back-up copies of their information and submissions in case any Launchpad data is lost or
                            removed at any time.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            SUBJECT TO APPLICABLE LAW, THE CONTENT ON OR OTHERWISE RELATED IN ANY WAY TO THE SITE, THE
                            SERVICES, LAUNCHPAD AND/OR LAUNCHPAD SITES OR ANY THIRD PARTY SITES OR SERVICES LINKED TO OR
                            FROM THE SITE IS PROVIDED “AS IS” AND WITHOUT CONDITIONS OR WARRANTIES OF ANY KIND. TO THE
                            FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, LAUNCHPAD, DISCLAIM ALL CONDITIONS
                            AND WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, SUBJECT TO APPLICABLE LAW, THOSE OF
                            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, COMPLETENESS, AVAILABILITY,
                            SECURITY, COMPATIBILITY AND NONINFRINGEMENT. LAUNCHPAD DOES NOT WARRANT THAT ANY CONTENT
                            WILL BE ERROR-FREE, THAT ACCESS THERETO WILL BE UNINTERRUPTED, THAT DEFECTS WILL BE
                            CORRECTED, OR THAT ANY LAUNCHPAD SERVICES, INCLUDING INTER ALIA, THE SITE OR THE SERVERS
                            THAT MAKE SUCH CONTENT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, NOR FREE
                            OF NEGLIGENCE. MOREOVER, SUBJECT TO APPLICABLE LAW, YOU ASSUME THE ENTIRE COST OF ALL
                            NECESSARY SERVICING, REPAIR OR CORRECTION. LAUNCHPAD DO NOT WARRANT OR MAKE ANY
                            REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF ANY CONTENT. APPLICABLE LAW
                            MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO
                            YOU. YOU HEREBY IRREVOCABLY WAIVE ANY CLAIM AGAINST LAUNCHPAD WITH RESPECT TO CONTENT AND
                            ANY CONTENT YOU PROVIDE TO THIRD PARTY SITES (INCLUDING CREDIT CARD AND OTHER PERSONAL
                            INFORMATION), TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW. PLEASE NOTE, HOWEVER, THAT
                            THIS DOES NOT AFFECT YOUR STATUTORY RIGHTS AS A CONSUMER, IN PARTICULAR THE LEGAL WARRANTY
                            FOR LATENT DEFECTS FOR USERS WHO ACCESS THE SITE IN CERTAIN JURISDICTIONS.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Reliance on any information appearing on an Launchpad website or Services is strictly at
                            Your own risk.
                        </Typography>

                        <Typography variant="h6" gutterBottom>O. LIMITATION OF LIABILITY:</Typography>
                        <Typography variant="body1" gutterBottom>
                            SUBJECT TO APPLICABLE LAW, UNDER NO CIRCUMSTANCES, INCLUDING NEGLIGENCE, SHALL LAUNCHPAD,
                            ITS GROUP UNDERTAKINGS, ITS GROUP UNDERTAKINGS’ PARTNERS, LICENSORS OR LICENSEES, OR ANY OF
                            THE FOREGOING ENTITIES RESPECTIVE RESELLERS, DISTRIBUTORS, SERVICE PROVIDERS OR SUPPLIERS,
                            BE LIABLE TO YOU OR ANY OTHER PERSON OR ENTITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL
                            OR CONSEQUENTIAL DAMAGES INCLUDING LOST PROFITS, PERSONAL INJURY (INCLUDING DEATH) AND
                            PROPERTY DAMAGE OF ANY NATURE WHATSOEVER, THAT RESULT FROM (A) THE USE OF, OR THE INABILITY
                            TO USE, THE SERVICES, THE SITE OR CONTENT, OR (B) THE CONDUCT OR ACTIONS, WHETHER ONLINE OR
                            OFFLINE, OF ANY USER OF THE SITE OR ANY OTHER PERSON OR ENTITY, EVEN IF LAUNCHPAD HAS BEEN
                            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SUBJECT TO APPLICABLE LAW, IN NO EVENT SHALL
                            LAUNCHPAD’S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION WHETHER IN
                            CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE EXCEED THE AMOUNT PAID BY YOU, IF ANY, OR
                            $100 (WHICHEVER IS LESS) FOR ACCESSING OR PARTICIPATING IN ANY ACTIVITY RELATED TO THE
                            SERVICES. MOREOVER, SUBJECT TO APPLICABLE LAW, UNDER NO CIRCUMSTANCES SHALL LAUNCHPAD, ITS
                            LICENSORS OR LICENSEES, OR ANY OF THE FOREGOING ENTITIES RESPECTIVE RESELLERS, DISTRIBUTORS,
                            SERVICE PROVIDERS OR SUPPLIERS, BE HELD LIABLE FOR ANY DELAY OR FAILURE IN PERFORMANCE
                            RESULTING DIRECTLY OR INDIRECTLY FROM AN ACT OF FORCE MAJEURE OR CAUSES BEYOND LAUNCHPAD’S
                            REASONABLE CONTROL.
                        </Typography>
                        <Typography variant="body1" gutterBottom>SUBJECT TO APPLICABLE LAW, LAUNCHPAD MAY TERMINATE YOUR
                            FURTHER ACCESS TO THE SERVICES OR CHANGE THE SERVICES OR DELETE CONTENT OR FEATURES IN ANY
                            WAY, AT ANY TIME AND FOR ANY REASON OR NO REASON WITHOUT LIABILITY.
                        </Typography>
                        <Typography variant="body1" gutterBottom>THE LIMITATIONS, EXCLUSIONS AND DISCLAIMERS IN THIS
                            SECTION AND ELSEWHERE IN THESE TERMS OF USE APPLY TO THE MAXIMUM EXTENT PERMITTED BY
                            APPLICABLE LAW.
                        </Typography>
                        <Typography variant="body1" gutterBottom>WITH RESPECT TO USERS WHO ACCESS THE SITE IN CERTAIN
                            JURISDICTIONS, THIS SECTION DOES NOT AFFECT YOUR STATUTORY RIGHTS AS A CONSUMER UNDER
                            APPLICABLE LAW.
                        </Typography>

                        <Typography variant="h6" gutterBottom>P. IMPERMISSIBLE CONDUCT:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad reserves the right at all times, in its sole discretion, to remove or refuse to
                            distribute any Content on the Services and to terminate user profiles. Launchpad also
                            reserves the right to access, read, preserve, and disclose any information as it reasonably
                            believes is necessary to comply with any applicable law, regulation, legal process or
                            government request; enforce the Terms, including investigation of potential violations
                            hereof; detect, prevent, or otherwise address fraud, security or technical issues; respond
                            to user support requests; and/or protect the rights, property or safety of Launchpad, its
                            Users and the public.
                        </Typography>
                        <Typography variant="body1" gutterBottom>The following is a list of actions that Users are
                            prohibited from doing in conjunction with the Users’ access or use of the
                            Services:
                        </Typography>
                        <Typography variant="body1" gutterBottom>Users shall not:</Typography>
                        <ol type="1">
                            <li><Typography variant="body1" gutterBottom>Post, submit or upload content (including, but
                                not limited to, words, photos, and
                                video clips) that contains the following:</Typography>
                                <ul>
                                    <li><Typography variant="body1" gutterBottom>Defamatory, illegal or encouraging of
                                        illegal activities or the discussion
                                        of illegal activities, pornographic, violent, obscene, abusive material or
                                        material that Launchpad finds objectionable due to any potential perceived
                                        liability;</Typography>
                                    </li>
                                    <li><Typography variant="body1" gutterBottom>Trademark, copyright, or other
                                        intellectual property or identity rights
                                        infringements;</Typography>
                                    </li>
                                    <li><Typography variant="body1" gutterBottom>Commercial solicitation</Typography>
                                    </li>
                                </ul>
                            </li>
                            <li><Typography variant="body1" gutterBottom>
                                access, tamper with, or use non-public areas of the Services, Launchpad’s computer
                                systems, or the technical delivery systems of Launchpad’s providers;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>access or search or attempt to access or search
                                the Services by any means other than
                                through Launchpad’s currently available, published interfaces that are provided by
                                Launchpad, unless the user has been specifically allowed to do so in a separate
                                agreement with Launchpad;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>probe, scan, or test the vulnerability of any
                                system or network or breach or
                                circumvent any security or authentication measures;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>impersonate another person or falsely state or
                                otherwise misrepresent your
                                affiliation or employment with a person or entity, or adopt a false identity if the
                                purposes of doing so is to mislead, deceive, or defraud another;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>post, submit or upload unauthorized commercial
                                communications (such as spam);</Typography></li>
                            <li><Typography variant="body1" gutterBottom>collect Users’ content or information, or
                                otherwise access the Services, using
                                automated means (such as harvesting bots, robots, spiders, or scrapers) without
                                Launchpad’s prior written permission;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>upload viruses or other malicious code, or use
                                the Services to do anything unlawful,
                                misleading, malicious, or discriminatory;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>solicit login information or access an account
                                belonging to someone else;</Typography></li>
                            <li><Typography variant="body1" gutterBottom>bully, intimidate, or harass any
                                User;</Typography></li>
                            <li><Typography variant="body1" gutterBottom>post content that is hate speech, threatening,
                                or pornographic; incites violence; or
                                contains nudity or graphic or gratuitous violence;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>display or produce any User Content that
                                infringes or violates any intellectual
                                property or other right of any entity or person, including, without limitation,
                                copyrights, patents, trademarks, and laws governing trade secrets, rights to
                                publicity or privacy;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>forge any TCP/IP packet header or any part of
                                the header information in any email or
                                posting, or in any way use the Services to send altered, deceptive or false
                                source identifying information;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>interfere with, or disrupt, or attempt to
                                interfere with or disrupt, the access of
                                any user, host or network, including, without limitation, sending a virus,
                                overloading, flooding, spamming, mail-bombing the Services, or by scripting the
                                creation of User Content in such a manner as to interfere with or create an undue
                                burden on the Services.</Typography>
                            </li>
                        </ol>


                        <Typography variant="h6" gutterBottom>Q. ADVERTISING:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad may offer advertisements and promotions on the Services or website. Interacting
                            with these advertisers will be solely Your responsibility.
                        </Typography>

                        <Typography variant="h6" gutterBottom>R. UNSOLICITED CONTENT:</Typography>
                        <Typography variant="body1" gutterBottom>
                            There are two types of Content: Solicited Content and Unsolicited Content. “Solicited
                            Content” means Content (a) that Launchpad expressly requests or enables You to provide via
                            any feature or activity on the site for Launchpad’s review or display and/or distribution
                            and possible specifically defined consideration or compensation explicitly offered by
                            Launchpad (collectively, “Consideration”) (such as the chance to have Your Content featured
                            on Funny Videos or any other program(s)); or (b) that You add to the site for which You do
                            not seek Consideration. “Unsolicited Content” is any and all Content that does not fall
                            within subparagraphs (a) or (b) of this paragraph.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad does not allow, accept or consider Unsolicited Content. You agree that any Content
                            You add is not being made in confidence or trust and that no confidential or fiduciary
                            relationship is intended or created between You and Launchpad in any way, and that You have
                            no expectation of any review, compensation or consideration of any type (other than any
                            stated Consideration). Except as expressly stated in these Terms of Use, the provisions of
                            these Terms of Use apply equally to Unsolicited Content and Solicited Content. Accordingly,
                            Launchpad, its affiliates, licensees, distributors, agents, representatives and other
                            authorized users shall be entitled to exploit and disclose all Content for all purposes as
                            set forth herein, and Launchpad shall not be liable to You or to any person claiming through
                            You for any exploitation or disclosure of any Content.
                        </Typography>

                        <Typography variant="h6" gutterBottom>S. JURISDICTIONAL AND VENUE ISSUES; GOVERNING
                            LAW:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Subject to the requirements of applicable consumer rights and other laws, You agree that any
                            action at law or in equity arising out of or relating to these Terms of Use or the Services
                            except for certain types of disputes described in the arbitration section, shall be filed,
                            and that venue properly lies, only in state or federal courts located in Los Angeles,
                            California, United States of America, and You hereby consent and submit to the personal
                            jurisdiction of such courts for the purposes of litigating any such action. Launchpad makes
                            no representation that Content on the site or through the Services is appropriate or
                            available for use in any particular location. Those who choose to access the site do so on
                            their own initiative and are responsible for compliance with all applicable laws, including
                            any applicable local laws.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Subject to the requirements of applicable consumer rights and other laws, these Terms of Use
                            shall be governed by and construed in accordance with the laws of the State of California
                            and the laws of the United States, without giving effect to any principles of conflicts of
                            law. If any provision of these Terms of Use shall be unlawful, void or for any reason
                            unenforceable, then that provision shall be deemed severable from these Terms of Use and
                            shall not affect the validity and enforceability of any remaining provisions.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            These Terms of Use take effect as an agreement and separately as a notice, which limits the
                            basis on which Launchpad makes the Services available. No waiver of any provision of these
                            Terms of Use by Launchpad shall be deemed a further or continuing waiver of such provision
                            or any other provision, and Launchpad’s failure to assert any right or provision under these
                            Terms of Use shall not constitute a waiver of such right or provision. In these Terms of
                            Use, the word “including” is used illustratively, as if followed by the words but not
                            limited to.” TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE THAT ANY CAUSE OF ACTION
                            YOU MAY HAVE ARISING OUT OF OR RELATED TO THESE TERMS OF USE OR ANY LAUNCHPAD WORLDWIDE
                            MEDIA OR THE SERVICES MUST COMMENCE WITHIN SIX (6) MONTHS (OR THE MINIMUM APPLICABLE
                            STATUTORY PERIOD, IF LONGER) AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE OF
                            ACTION SHALL BE PERMANENTLY BARRED.
                        </Typography>

                        <Typography variant="h6" gutterBottom>T. AMENDMENT:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Subject to applicable law, at any time, Launchpad may amend these Terms of Use (including by
                            modification, deletion and/or addition of any portion thereof). By using the Website, you
                            are agreeing to our Terms of Use and to the terms of our <u>Privacy Policy</u> as set forth
                            herein.
                            We reserve the right to make changes to our Terms of Use and our <u>Privacy Policy</u> at
                            any time.
                            It is your responsibility to periodically review the Terms of Use and <u>Privacy
                            Policy</u> and be
                            aware of our current terms, Launchpad’s rights and your responsibilities and duties in
                            connection with protecting any information you wish to keep private or confidential. Unless
                            otherwise specified, any changes shall be effective when they are posted, and your continued
                            use of the Website following the posting of changes will mean that you accept and agree to
                            the changes.
                        </Typography>

                        <Typography variant="h6" gutterBottom>U. TERMINATION:</Typography>
                        <Typography variant="body1" gutterBottom>
                            These Terms of Use are effective until terminated by Launchpad. You may terminate these
                            Terms of Use at any time by discontinuing use of the Services and/or deleting Your account,
                            however such termination in no way affects any rights granted to Launchpad relating to
                            Content that You may have submitted prior to termination, all of which shall remain in full
                            force and effect and shall be governed by these Terms of Use. Launchpad may immediately
                            terminate these Terms of Use with respect to You (including Your access to the Services) in
                            Launchpad’s absolute discretion including, without limitation, if You breach or fail to
                            comply with any material term or provision of these Terms of Use. Upon termination, You must
                            cease use of the Services and destroy all materials obtained from such use and all copies
                            thereof, whether made under these Terms of Use or otherwise. Launchpad has adopted and
                            implemented a policy that provides for the termination, in appropriate circumstances, of the
                            accounts of users who are infringers of copyright. Any fraudulent, abusive or otherwise
                            illegal activity may also be grounds for termination of Your account, at Launchpad’s sole
                            discretion, and You may be reported to appropriate law-enforcement agencies.
                        </Typography>

                        <Typography variant="h6" gutterBottom>V. RELATIONSHIP OF THE PARTIES:</Typography>
                        <Typography variant="body1" gutterBottom>
                            If You are a director, officer or employee of Launchpad, or their respective parent,
                            subsidiary or affiliated companies or an immediate family member residing in the same
                            household of any of the preceding persons, You must disclose this relationship when You
                            establish Your account, upload Your Content or otherwise use the Services.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            You hereby appoint Launchpad as Your agent with full power to enter into and execute any
                            document and/or do any act which might be necessary to confirm the grant of rights,
                            consents, agreements, assignments and waivers set forth in these Terms of Use. You agree
                            that any submissions You make are not being made in confidence or trust and that no
                            confidential or fiduciary relationship is intended or created between You and Launchpad in
                            any way.
                        </Typography>

                        <Typography variant="h6" gutterBottom>W. TRADEMARKS & COPYRIGHT:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad is a trademark of Launchpad. The Launchpad website and its aggregate content,
                            including all logos, look and feel, headers, images, content, language, and proprietary data
                            and software are ©2020 Copyright Launchpad Entertainment. All rights reserved.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            All of the Launchpad Services, trademarks, slogans, service marks, trade names, design
                            including all logos, look and feel, headers, images, content, language, and slogans, data,
                            and software are the proprietary property of Launchpad and/or Launchpad’s partners,
                            affiliates, licensors or licensees, and are subsequently protected by U.S. and international
                            copyright laws. This Content cannot be used or copied without Launchpad’s written consent.
                            To request permission, contact www.viralbear.com. Framing or iFraming the website is
                            strictly
                            prohibited.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad may change the Services or delete content or features at any time, in any way, for
                            any reason. Except as Launchpad specifically agrees in writing, or as stated otherwise
                            herein, no content from the site may be used, reproduced, transmitted, distributed or
                            otherwise exploited in any way or on any other site, nor as part of a derivative work,
                            except, that where the site is configured to enable the download of particular content, You
                            may download one copy of such content to a single computer for Your personal, noncommercial
                            home use only, provided that You (a) keep intact all copyright and other proprietary
                            notices, (b) make no modifications to, and do not rent, lease, loan, sell, distribute, copy
                            (except to create a single copy for Your own backup purposes), or create any derivative
                            works based on the site or the content, in whole or in part, and (c) do not use the content
                            in an unlawful manner or in a manner that suggests an association with any of Launchpad’s or
                            their partners or affiliates products, services or brands. Any business use, re-mailing or
                            high-volume or automated use of the site is prohibited.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            You acknowledge and agree that nothing in these Terms of Use shall have the effect of
                            transferring the ownership of any copyrights, trademarks, slogans, service marks, trade
                            names, trade dress or other proprietary rights in the Services or content or any part
                            thereof to You or any third party, nor to authorize You to create derivative works based on
                            the Content unless otherwise specifically authorized herein.
                        </Typography>

                        <Typography variant="h6" gutterBottom>X. CLAIMS OF COPYRIGHT INFRINGEMENT:</Typography>
                        <Typography variant="body1" gutterBottom>
                            If you believe that any Content infringes upon your copyrights, you may submit a
                            notification pursuant to the “Take Down” Provision of the Digital Millennium Copyright Act
                            (“DMCA”) by providing Launchpad at viralbear.com with the following information in writing
                            (see 17 U.S.C. 512(c)(3) for further detail): * A physical or electronic signature of the
                            person authorized to act on behalf of the owner of an exclusive right that is allegedly
                            infringed; * Identification of the copyrighted work claimed to have been infringed, or, if
                            multiple copyrighted works at a single online site are covered by a single notification, a
                            representative list of such works at that site; * Identification of the material that is
                            claimed to be infringing or to be the subject of infringing activity and that is to be
                            removed or the access to which is to be disabled, and information reasonably sufficient to
                            permit Launchpad to locate the material; * Information reasonably sufficient to permit
                            Launchpad to contact the complaining party, such as an address, telephone number, and, if
                            available, an electronic mail address at which the complaining party may be contacted; * A
                            statement that the complaining party has a good-faith belief that use of the material in the
                            manner complained of is not authorized by the copyright owner, its agent, or the law; and *
                            A statement that the information in the notification is accurate, and under penalty of
                            perjury, that the complaining party is authorized to act on behalf of the owner of an
                            exclusive right that is allegedly infringed.
                        </Typography>
                        <Typography variant="body1" gutterBottom>Launchpad may at Launchpad’s election give You notice
                            that Launchpad has removed or disabled access to certain material by means of a general
                            notice on the site, electronic mail to a user’s e-mail address in Launchpad’s records. If
                            You receive such a notice, You may provide counter-notification in writing to the designated
                            agent that includes the information below. To be effective, the counter notification must be
                            a written communication that includes the following:</Typography>
                        <Typography variant="body1" gutterBottom>* Your physical or electronic signature; *
                            Identification of the material that has been removed or to which access has been disabled,
                            and the location at which the material appeared before it was removed or access to it was
                            disabled; * A statement from You under the penalty of perjury that You have a good faith
                            belief that the material was removed or disabled as a result of a mistake or
                            misidentification of the material to be removed or disabled; and * Your name, physical
                            address and telephone number, and a statement that You consent to the jurisdiction of a
                            court for the judicial district in which Your physical address is located, or if Your
                            physical address is outside of the United States, for any judicial district in which
                            Launchpad may be found, and that You will accept service of process from the person who
                            provided notification of allegedly infringing material or an agent of such
                            person.</Typography>
                        <Typography variant="body1" gutterBottom>You acknowledge that if you fail to comply with all of
                            the requirements of this section, your DMCA notice may not be valid.</Typography>

                        <Typography variant="h6" gutterBottom>Y. CONSENT AND CHANGES TO THESE TERMS:</Typography>
                        <Typography variant="body1" gutterBottom>
                            By using the Launchpad Services, you are agreeing to our Terms of Use and to the terms of
                            our <u>Privacy Policy</u> as set forth herein. We reserve the right to make changes to our
                            Terms of
                            Use and our <u>Privacy Policy</u> at any time. It is your responsibility to periodically
                            review the
                            Terms of Use and <u>Privacy Policy</u> and be aware of our current terms, Launchpad’s rights
                            and
                            your responsibilities and duties in connection with protecting any information you wish to
                            keep private or confidential. Unless otherwise specified, any changes shall be effective
                            when they are posted, and your continued use of the Website following the posting of changes
                            will mean that you accept and agree to the changes.
                        </Typography>

                        <Typography variant="h6" gutterBottom>AA. ARBITRATION; NO CLASS ACTIONS</Typography>
                        <Typography variant="body1" gutterBottom>
                            Except if you opt-out or for disputes relating to: (1) Your or Launchpad’s intellectual
                            property (such as trademarks, trade dress, domain names, trade secrets, copyrights and
                            patents); or (2) violations of provisions 6, 8, or 14 of the “Impermissible Conduct,” clause
                            above, you agree that all disputes between you and Launchpad (whether or not such dispute
                            involves a third party) with regard to your relationship with Launchpad, including without
                            limitation disputes related to these Terms of Use, your use of the Services, and/or rights
                            of privacy and/or publicity, will be resolved by binding, individual arbitration under the
                            American Arbitration Association’s rules for arbitration of consumer-related disputes and
                            you and Launchpad hereby expressly waive trial by jury. As an alternative, you may bring
                            your claim in your local “small claims” court, if permitted by that small claims court’s
                            rules. You may bring claims only on your own behalf. Neither you nor Launchpad will
                            participate in a class action or class-wide arbitration for any claims covered by this
                            agreement. You also agree not to participate in claims brought in a private attorney general
                            or representative capacity, or consolidated claims involving another person’s account, if
                            Launchpad is a party to the proceeding. This dispute resolution provision will be governed
                            by the Federal Arbitration Act. In the event the American Arbitration Association is
                            unwilling or unable to set a hearing date within one hundred and sixty (160) days of filing
                            the case, then either Launchpad or you can elect to have the arbitration administered
                            instead by the Judicial Arbitration and Mediation Services. Judgment on the award rendered
                            by the arbitrator may be entered in any court having competent jurisdiction. Any provision
                            of applicable law notwithstanding, the arbitrator will not have authority to award damages,
                            remedies or awards that conflict with these Terms of Use.
                        </Typography>
                        <Typography variant="body1" gutterBottom>You may opt out of this agreement to arbitrate. If you
                            do so properly, neither you nor Launchpad can require the other to participate in an
                            arbitration proceeding. To opt out, you must notify Launchpad in writing within 30 days of
                            the date that you first became subject to this arbitration provision. You must use this
                            address to opt out:</Typography>
                        <Typography variant="body1" gutterBottom>
                            Launchpad Entertainment, LLC.<br/>
                            8939 S. Sepulveda Blvd., Suite 508<br/>
                            Los Angeles, CA 90045<br/>
                        </Typography>
                        <Typography variant="body1" gutterBottom>You must include your name and residence address, the
                            email address and username you use for your Launchpad website account, and a clear statement
                            that you want to opt out of this arbitration agreement.</Typography>
                        <Typography variant="body1" gutterBottom>If the prohibition against class actions and other
                            claims brought on behalf of third parties contained above is found to be unenforceable, then
                            all of the preceding language in this Arbitration section will be null and void. This
                            arbitration agreement will survive the termination of your relationship with
                            Launchpad.</Typography>

                        <Typography variant="h6" gutterBottom>BB. EXCLUSIVE RELEASE AND GRANT OF RIGHTS</Typography>
                        <Typography variant="body1" gutterBottom><b>Without in anyway limiting the foregoing or without
                            limiting anything contained herein, the person who owns the Content, further agrees to the
                            following:</b></Typography>

                        <Typography variant="h6" gutterBottom>(THE CONTENT OWNER <u>MUST BE AT LEAST 18 YEARS</u> OF
                            AGE)</Typography>
                        <Typography variant="body1" gutterBottom>In consideration of one or more of the following, such
                            as the time and resources that Launchpad expends in evaluating the Content that You
                            submitted to Launchpad, which is owned by You and/or in which You appear for possible
                            inclusion in Launchpad use, for Your desire to gain exposure for Yourself and/or the
                            Content” and for other good and valuable consideration, the receipt and adequacy of which
                            are hereby acknowledged, You irrevocably grant to Launchpad sole and exclusive ownership of
                            all right, title and interest in and to the Content, (excluding any music owned by third
                            parties, if any) regardless of the medium or method that You used to submit the Content to
                            Launchpad, or the medium or method by which the recording was made.</Typography>
                        <Typography variant="body1" gutterBottom>Without limiting the foregoing grant of rights, You
                            understand and agree that Your grant to Launchpad specifically includes the exclusive right,
                            license and permission to freely utilize and exploit the Content and/or any portion(s)
                            thereof in any manner whatsoever. In addition, You grant Launchpad the right to use Your
                            name, voice, likeness, biographical information, appearance and performance in and in
                            connection with the Content and/or the Programs, as “Programs” is defined below
                            (collectively, the “Personal Rights”). Your grant to Launchpad includes use of Your Personal
                            Rights and any use Launchpad may make of the Content, including, without limitation, any use
                            of the Content in and/or in connection with any version of programming, and/or any other
                            program(s), format(s), production(s), compilation(s), service(s), licensing, and/or
                            exploited as an individual clip or part of a larger compilation of clips or portions or
                            elements thereof, commercials, commercial tie-ins, product endorsements, product
                            merchandising and/or merchandising of any kind, whether or not related to Launchpad, and
                            also includes, without limitation, the right to use the Content and the Personal Rights to
                            publicize, advertise and promote the Content and/or any and all of the Programs and/or
                            broadcaster’s or other applicable exhibitor’s or transmission entity’s respective programs,
                            products or services, including transmission by satellite and over the Internet
                            (collectively the “Programs”) in any and all media, whether now known or hereafter devised,
                            including, without limitation, all forms of home video (including, but not limited to,
                            videocassettes, DVDs, digital recordings or transmission, etc.); theatrical motion pictures;
                            compilations; printed media; the Internet, websites and any and all digitized versions
                            (including, without limitation, any sponsored or commercial use in connection with online
                            banner, “preroll,” “postroll,” and/or targeted advertising, graphic overlays and
                            watermarking (and any other modifications or edits to the Content itself) digital and
                            electronic devices (including, but not limited to gaming devices such as entertainment
                            stations and handheld devices, such as, Nintendo, Playstation, Xbox, Gameboy, DS, PSP, and
                            cell phones, tablets, etc.); all new media and future technologies and all forms of
                            television, (e.g., free, pay, pay-per-view, cable, satellite or otherwise) throughout the
                            universe in perpetuity and in any and all advertising, publicity and promotion relating to
                            any of the foregoing (all of the foregoing, collectively, “Commercial Rights”), all at
                            Launchpad’s sole unlimited discretion. You also understand and agree that Launchpad may
                            sell, assign or license the rights hereunder (in whole or in part) to any third party in its
                            sole discretion and without providing any further consideration to You.</Typography>
                        <Typography variant="body1" gutterBottom>You are aware and acknowledge that new or changed
                            rights and technologies, uses, media, modes of transmission, distribution, dissemination,
                            exhibition or performance are being developed and will continue to be developed, discovered
                            or recognized in the future, which may offer or create new rights and opportunities to
                            exploit the Content and the Personal Rights (the “New Exploitation Rights”). You hereby
                            grant and convey to Launchpad without reservation, any and all New Exploitations Rights in
                            and to the Content and to the Personal Rights, regardless of whether or not You are
                            currently aware of or can foresee such uses.</Typography>
                        <Typography variant="body1" gutterBottom>You understand that Launchpad has not promised or given
                            any assurances that You will receive any compensation or as to whether or not the Content or
                            any portion thereof, is or will be included in any Program(s) or otherwise utilized, or that
                            any portion of the Personal and/or Commercial Rights are or will be in any way exploited.
                            You also understand and accept that the Terms may be updated or changed from time to time at
                            the sole discretion of Launchpad and it is your responsibility to periodically review the
                            Terms of Use and <u>Privacy Policy</u> to be aware of the current terms. Further, You agree
                            that
                            the Content may be cut, edited, modified, added to, subtracted from, arranged, rearranged,
                            shortened and revised for any reason and in any manner which Launchpad may in its sole
                            absolute discretion determine, including without limitation, for reasons including for
                            content, presentation and time, and to the extent decided by Launchpad in its sole
                            discretion, if at all, Launchpad may also add or modify the sound effects, music, voices,
                            including host voiceovers and/or other elements of the Content, and they may use, adapt and
                            modify the Content and/or the use of the Personal Rights or any portion or element of the
                            foregoing and combine it with other materials in any Program(s) or otherwise at their
                            discretion. You hereby expressly waive on Your behalf, and on behalf of Your heirs,
                            executors, administrators and assigns, any so-called “moral rights,” “droit moral” and any
                            similar rights, laws and legal principles that may now or hereafter be
                            recognized.</Typography>
                        <Typography variant="body1" gutterBottom>You hereby release, discharge and hold harmless
                            Launchpad , its subsidiaries, affiliates, employees, officers, principals and directors
                            licensees, grantees, successors and assignees, including but not limited to, each of their
                            respective parent, subsidiary and affiliated entities, and the respective officers,
                            directors, employees and representatives of any of the foregoing (collectively “Releasees”)
                            from and against any and all claims, whether at law or in equity, that You may have at any
                            time (whether or not You are aware of any such claims), including, without limitation,
                            claims for breach of contract, infliction of emotional distress, defamation, false light,
                            common law or statutory misappropriation, invasion or other violations of any actual or
                            purported right of privacy and/or publicity, and claims under equivalent federal or state
                            laws arising from Your submission of the Content to Launchpad and the exploitation of any or
                            all of the rights granted to Launchpad hereunder, including, without limitation, the rights
                            to the Content, the Commercial Rights and the Personal Rights (collectively, the “Released
                            Claims”). The Released Claims shall include, without limitation, any claim relating to,
                            arising from or in connection with: (i) any use, exploitation or exercise of any right(s)
                            granted hereunder (ii) the public dissemination and/or distribution of the Content
                            including, without limitation, any claim resulting from the piracy or other unauthorized
                            distribution, duplication and/or display of the Content by third parties; (iii) the loss of
                            the Content and/or the failure of the Content to be properly or timely displayed to the
                            public for any reason including, without limitation, whether as a result of technical
                            difficulties, equipment failure, inadequate capacity, system overload, excess traffic, human
                            error, malicious actions or for any other reason whatsoever (iv) the negotiation or
                            execution of this agreement, including but not limited to, any claims based upon allegations
                            of duress, undue influence or the like.</Typography>
                        <Typography variant="body1" gutterBottom>You understand and agree that all rights You may have
                            under Section 1542 of the California Civil Code and any similar law of any state or U.S.
                            territory, any similar federal law, or any similar common law or principle of similar
                            effect, are hereby expressly waived. You acknowledge and understand that said section reads
                            as follows:</Typography>
                        <Typography variant="body1" gutterBottom>“A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE
                            CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE
                            RELEASE, WHICH IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE
                            DEBTOR.”</Typography>
                        <Typography variant="body1" gutterBottom>You acknowledge that You may hereafter discover claims
                            in addition to the ones released in this agreement, and You hereby expressly release
                            Launchpad from any such unknown and/or unsuspected claims.</Typography>
                        <Typography variant="body1" gutterBottom>You understand that nothing shall require Launchpad to
                            include You , anyone affiliated with You or the Content in any Program or to broadcast or
                            otherwise exhibit the Program(s) in any media and that all such matters are within
                            Launchpad’s sole discretion. You acknowledge that, in the event of a breach of this
                            agreement by Launchpad or any third party, the damage, if any, caused to You thereby will
                            not be irreparable or otherwise sufficient to entitle You to seek or obtain injunctive or
                            other equitable relief. You acknowledge that Your rights and remedies in any such event will
                            be strictly limited to the right, if any, to recover damages in an action at law, and You
                            will not have the right to enjoin the production, exhibition, distribution or any other
                            exploitation of the Programs, the Content or any allied rights granted herein with respect
                            thereto, nor to revoke or otherwise impair any of the rights granted to Launchpad
                            herein.</Typography>
                        <Typography variant="body1" gutterBottom><b>(i) You affirm that You have never submitted nor
                            granted any right to the Content to any other television or media entity, any website or
                            internet service or operator/provider or to any third party, except, that to the extent You
                            have submitted the Content to a third party, You will provide Launchpad with detailed
                            information in a separate document.</b></Typography>
                        <Typography variant="body1" gutterBottom><b>You represent and agree that from the date of Your
                            submission of the Content to Launchpad, You have not, and shall not ever submit, or attempt
                            to grant any rights in or to the Content, to any other party including without limitation,
                            any television or media entity or to any website or internet provider, except by private
                            transmission to Your family solely for their own private use and with no other rights
                            granted to the Content. Except as set forth above, You have not submitted the Content to
                            third parties or granted rights to the Content to third parties and You will use Your best
                            efforts to remove the Content (and revoke or rescind any rights to the Content previously
                            granted) from any other website or television program or any other media outlet or where You
                            are aware that the Content is posted. You have not and agree not to take any action that
                            will impair the rights granted to Launchpad.</b></Typography>
                        <Typography variant="body1" gutterBottom><b>You represent and warrant that You have not violated
                            and will not violate any provisions of Section 507 of the Federal Communications Act which
                            makes the acceptance of payment of money or other consideration for the inclusion of matter
                            in a program a criminal offense in violation of Section 507.</b></Typography>
                        <Typography variant="body1" gutterBottom>You represent and warrant that:</Typography>
                        <ol type="1">
                            <li>
                                <ol type="a">
                                    <li><Typography variant="body1" gutterBottom>You are the sole and exclusive owner of
                                        the Content because (i) You shot the
                                        Content or (ii) You are the submitter of the Content and the shooter of the
                                        Content has transferred all copyright in the Content to You;</Typography>
                                    </li>
                                    <li><Typography variant="body1" gutterBottom>You have the full right and authority
                                        to enter into this agreement and to
                                        grant all rights granted herein;</Typography>
                                    </li>
                                    <li><Typography variant="body1" gutterBottom>You have not granted any third parties
                                        any rights to the Content except as
                                        specifically disclosed in writing in this Release and You agree that You
                                        will not take any action to impair the rights You are granting
                                        hereunder;</Typography>
                                    </li>
                                </ol>
                            </li>
                            <li><Typography variant="body1" gutterBottom>the making, exhibition, distribution and/or
                                other exploitation of the Content in
                                connection with any Program(s) does not violate or infringe the rights of others or
                                constitute a defamation or invasion of Your or their privacy or right of
                                publicity;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>You have not falsely identified any individual
                                involved in the shooting of the
                                Content or any individual whose appearance or voice is incorporated in the
                                Content;</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>You have obtained all necessary consents and
                                permissions required for Launchpad to
                                exploit the rights granted to it hereunder including, inter alia, any and all
                                intellectual property rights of third parties, all personal appearance/ privacy
                                consents and or releases of anyone identifiable in the Content, all location rights
                                and/or releases, and any other rights and/or releases necessary for Launchpad to
                                fully exploit the rights granted hereunder and that all executed third party
                                consents and/or releases which You provide to Launchpad contain true and accurate
                                contact information for the signing party(ies) and have been actually signed by the
                                legal owner of the rights being granted hereunder pursuant to such consents and/or
                                releases and</Typography>
                            </li>
                            <li><Typography variant="body1" gutterBottom>the Content and its use by Launchpad does not
                                fall under the jurisdiction of any
                                guild or union (for example, the DGA, SAG-AFTRA, the WGA, etc.). You hereby agree to
                                indemnify, defend and hold Launchpad and its subsidiaries, affiliates, licensees,
                                grantees, successors and assignees, the Program(s) broadcasters, their respective
                                parent, subsidiary and affiliated entities and the respective officers, directors,
                                employees and representatives of each of the foregoing entities, companies, and
                                organizations and any and all other related person(s) or entity(ies), harmless
                                against any and all losses, claims, debts, demands, liabilities, attorneys’ fees and
                                expenses, and all other damages or costs arising from or related to: a) any breach
                                of the representations or warranties made herein or the falsity of any of such
                                representations or warranties, including, without limitation, any and all claims by
                                third parties that their signature(s) has or have been forged or otherwise obtained
                                by any improper means, and b) the use by Releases of any of the rights and
                                permissions You have granted herein, and c); and any act or omission by You in
                                connection with Your submissions or application for or an appearance in the
                                Program.</Typography>
                            </li>
                        </ol>
                        <Typography variant="body1" gutterBottom>You understand and agree that Launchpad may assign its
                            rights hereunder in whole or in part to any person, firm or corporation, and such rights may
                            be assigned again by any assignee thereof. You understand and agree that You may not grant
                            or purport to grant to any third party the rights granted to Launchpad under this Release.
                            This Release will be governed by and construed under and in accordance with the laws of the
                            State of California. Except for certain types of disputes described in the arbitration
                            section of the Terms of Use, You hereby consent and agree to the exclusive jurisdiction of
                            the federal and state courts of the State of California located in the County of Los
                            Angeles, in connection with any lawsuit, action or proceeding arising out of or related to
                            this agreement, the use of the Content, and/or to any rights granted hereunder.</Typography>
                        <Typography variant="body1" gutterBottom>You agree to execute any additional documents which
                            Launchpad may from time to time submit to You to evidence, establish, maintain, protect,
                            enforce or defend Launchpad’s exercise and full exploitation of any of the rights You have
                            granted herein including without limitation, all right, title and interest in and to the
                            Content or any portion or element thereof. If You fail to execute and deliver such
                            documents, IT NO WAY INVALIDATES THE RIGHTS GRANTED HEREIN and further, You hereby appoint
                            Launchpad as Your attorney-in-fact, with full right of substitution and delegation, to
                            execute any such documents in Your name and on Your behalf to effectuate the purpose of this
                            agreement, such power being irrevocable and coupled with an interest.</Typography>
                        <Typography variant="body1" gutterBottom>This agreement constitutes the entire understanding
                            between You and Launchpad, and supersedes all prior negotiations, understandings and
                            agreements, whether written or oral, pertaining hereto and cannot be modified except in a
                            written document signed by Launchpad and You. Any waiver of any term of this agreement in a
                            particular instance shall not be a waiver of such term for the future. If any provision,
                            term or condition of this agreement is held invalid or otherwise unenforceable, the validity
                            and enforceability of the remaining provisions, terms and conditions shall not be impaired
                            thereby. This agreement may be executed in any number of counterparts, each of which when so
                            executed and delivered shall be deemed to be an original and all of which taken together
                            shall constitute one and the same instrument, respectively.</Typography>
                        <Typography variant="body1" gutterBottom>You declare under penalty of perjury under the laws of
                            the State of California and of the United States that all statements made by You in this
                            agreement are true and correct, that the name below is Your legal name, and that the
                            signature below is Your legal signature.</Typography>
                        <Typography variant="body1" gutterBottom>You understand and are bound by all terms contained in
                            this agreement. Further, You understand that neither Launchpad would further evaluate the
                            Content without this agreement and that should Launchpad include the Content or any portion
                            thereof in any Program(s) or exercise any other rights granted hereunder, it will be doing
                            so in reliance on this agreement.</Typography>
                        <Typography variant="body1" gutterBottom>IF YOU, THE <b>OWNER</b> OF THE CONTENT, ARE <b>BETWEEN
                            13 AND 18
                            YEARS OF AGE, YOU MUST HAVE YOUR LEGAL GUARDIAN READ AND AGREE TO THE
                            FOLLOWING:</b></Typography>
                        <Typography variant="body1" gutterBottom>I, the parent or legal guardian (referred to as “I” or
                            “Guardian”) represent and warrant that I am either: (i) the parent (with sole or shared
                            custody, as applicable) or (ii) the legal guardian of the minor child (the “Minor”) (who is
                            a User of the Services) and that I have the legal capacity to enter into irrevocable,
                            binding agreements on behalf of the Minor. , I, both individually and on behalf of the Minor
                            and as the Minor’s parent or legal guardian, agree to be bound by all of the provisions of
                            this agreement. As a material part of the consideration inducing Launchpad to enter into the
                            foregoing agreement with the Minor for use of the Content and the possible benefits arising
                            therefrom, I hereby: ratify and approve each and all of the terms, conditions, rights,
                            indemnities, releases and obligations contained in the agreement; agree to attempt to secure
                            and to do nothing directly or indirectly to hinder or prevent the full performance thereof
                            by the Minor; consent to the use of Minor’s name, likeness, and voice as provided in the
                            agreement, in and in connection with the production, distribution, exhibition, exploitation
                            and promotion of the Program; and irrevocably guarantee and warrant that Minor will not
                            disaffirm or disavow the agreement on the grounds that Minor is a minor at the date of the
                            execution thereof, or on any other similar grounds.</Typography>
                        <Typography variant="body1" gutterBottom>This guarantee shall be applicable as well to any
                            modification, amendment, extension, renewal or substitution of the agreement, and to the
                            agreement as modified by any waiver. If Launchpad elects to seek Court approval of this
                            agreement, I, in consideration of the execution of the agreement by Launchpad, further agree
                            to cooperate with Launchpad to secure the approval, by a Court of competent jurisdiction, of
                            the agreement. I agree to indemnify and hold the Releases (as defined in the agreement)
                            harmless from and against any and all claims, liabilities, costs or expenses, including
                            reasonable attorneys’ fees which may arise from the breach or alleged breach by Minor or
                            Guardian of the foregoing.</Typography>
                        <Typography variant="body1" gutterBottom>THE PARENT OR LEGAL GUARDIAN OF THE MINOR SUBMITTING
                            THE CONTENT HAS READ AND AGREES TO THE FOREGOING.</Typography>
                        <Typography variant="body1" gutterBottom><b>While You may be requested to complete additional
                            documents in connection herewith, any failure to complete such documents as so requested by
                            Launchpad or its associates in no way limits, voids, relinquishes, modifies, or diminishes
                            the rights herein granted.</b></Typography>
                        <Typography variant="body1" gutterBottom><u><b>THIS IS A LEGAL DOCUMENT. YOU AGREE THAT, SUBJECT
                            TO THE TERMS HEREIN, YOU ARE EXCLUSIVELY TRANSFERRING ALL YOUR RIGHTS IN THE SUBMITTED
                            CONTENT TO LAUNCHPAD ENTERTAINMENT, LLC., ITS PARENTS, AFFILIATES AND/OR ASSIGNS, IN
                            PERPETUITY, IN ALL MEDIA, THROUGHOUT THE UNIVERSE.</b></u></Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default TermsOfUse
