import React, {useEffect} from "react";
import './privacyPolicy.css'; // also used to terms of service js file
import Header from "./Header";
import { businessName } from "./VitalInfo";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function PrivacyPolicy(){
    useEffect(() => {document.title = 'Privacy Policy'}, []);

    return(
        <div className="privacy-policy">
            <Header/>

            <ScrollToTop/>
            <section className="first-section-p sections">
                <h1 className="page-h1">Privacy Policy</h1>
                <p>
                    At {businessName}, we strive to provide the best customer 
                    experience so that our consumers enjoy continuous service excellence. For us to be
                    consistent we must understand customer buying habits so we can provide outstanding 
                    personalized experience for every customer. As we do this, we are careful to always 
                    show transparency and respect the privacy and security of our customers and their personal data.
                </p>

                <p>
                    This policy explains how customer data is stored, shared and used outlining the controls 
                    in place and choices on sharing of personal data when you visit or make purchases from {businessName}.
                </p>
            </section>

            <section className="sections">
                <h1 className="page-h1">Applicable laws</h1>
                <p>
                    This Privacy Policy with its use is governed by the laws of the Federal Republic of Nigeria 
                    and the Nigerian Courts shall have jurisdiction over same. This is without prejudice to the 
                    right of {businessName} to seek recourse in any jurisdiction worldwide in order to restrain the 
                    unlawful use of any of the materials contained in the Website.
                </p>
            </section>

            <section className="sections">
                <h1 className="page-h1">Collection of Personally Identifiable Information</h1>
                <p>
                    While you can browse all sections of our site without being a registered member, certain activities 
                    like having a telehealth consultation do require registration.
                    We collect personally identifiable information (name, phone number, etc.) from you 
                    when you want to have a telehealth consultation with {businessName}.
                </p>
            </section>

            <section className="sections">
                <h1 className="page-h1">Demography and Data Profiling</h1>
                <p>
                    We use personal information to provide the services you request. To the extent to 
                    which we require your personal information to market to you, we will provide you 
                    the choice to opt out and to the extent allowed by law, your choice of not opting 
                    out will be deemed your conclusive acceptance of the use of your personal information 
                    for this purpose.
                    We use your personal information to resolve disputes, troubleshoot problems, and help 
                    promote a safe service, measure consumer interest in our products and services, inform 
                    you about online and offline offers and provide you with product and services updates. 
                    In our efforts to continually improve our product and service offerings, we collect and 
                    analyse demographic and profile data about our users' activity on our website.
                    We identify and use your IP address to help diagnose problems with our server, and to 
                    administer our website. Your IP address is also used in identity confirmation and gathering 
                    of broad demographic information. We will occasionally ask you to complete optional online 
                    surveys. These surveys may ask you for contact information and demographic information 
                    (like location, local government area, age, or income band). We use this data to tailor your 
                    experience on our website, providing you with content that we think you may be interested in 
                    and to display content according to your preferences.
                </p>
            </section>

            <section className="sections">
                <h1 className="page-h1">Sharing of Personal Information</h1>
                <p>
                    We may share personal information with our other corporate entities and affiliates to: 
                    help detect and prevent identity theft, fraud and other potentially illegal acts; 
                    correlate related or multiple accounts to prevent abuse of our services; 
                    and to facilitate joint or co-branded services that you request where such services are 
                    provided by more than one corporate entity. However, at all times we will endeavor to keep 
                    control and be responsible for the use of your personal information. By providing {businessName} with 
                    your personal information, you consent to our transferring of your personal information to our other 
                    corporate entities and affiliates or service providers who may not provide the same level of data 
                    protection as us. If we do make such a transfer, we will, if appropriate, enter into a contract with 
                    such third parties to mandate they follow this privacy policy with respect to your personal information.
                </p>
                <p>
                    Those entities and affiliates may not market to you as a result of such sharing unless you explicitly opt in.
                </p>
                <p>
                    We may disclose personal information if required to do so by law or in the good faith belief that 
                    such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal processes. 
                    We may disclose personal information to law enforcement offices, third party rights owners, or others in 
                    the good faith belief that such disclosure is reasonably necessary to: enforce our Terms or Privacy Policy; 
                    respond to claims that an advertisement, posting or other content violates the rights of a third party; or 
                    protect the rights, property or personal safety of our users or the general public.
                </p>
                <p>
                    {businessName} and its affiliates will share some or all of your personal information with another business 
                    entity should we (or our assets) plan to merge with, or be acquired by that business entity. Should such 
                    a transaction occur, that other business entity (or the new combined entity) will be required to follow 
                    this privacy policy with respect to your personal information.
                </p>
            </section>

            <section className="sections">
                <h1 className="page-h1">Security Measures</h1>
                <p>
                    Our site has strict security measures in place to protect the loss, misuse, and alteration of the 
                    information under our control. Whenever you change or access your account information, we offer the 
                    use of a secure server. Once your information is in our possession we adhere to strict security 
                    guidelines, protecting it against unauthorized access. However, we advise that the internet and World 
                    Wide Web is not 100% secure and to the extent permitted by law, {businessName} assumes no liability for 
                    any loss you may suffer as a result of interception, alteration or misuse of information transmitted 
                    over the Internet.
                </p>
            </section>

            <section className="sections">
                <h1 className="page-h1">Target Advertising</h1>
                <p>
                    We use third-party advertising companies to serve ads when you visit our website. Those entities and 
                    affiliates may not market to you unless you explicitly opt in.
                </p>
            </section>

            <section className="sections">
                <h1 className="page-h1">Retention of Personal Information</h1>
                <p>
                    We will retain your personal information only for so long as reasonably necessary for the 
                    purposes set out above.
                </p>
            </section>

            <section className="sections">
                <h1 className="page-h1">Available Remedies for Violation of the Privacy Policy</h1>
                <p>
                    You have the right to access personal information we hold about you and to ask that your personal 
                    information is corrected, updated, or deleted. If you would like to exercise this right, please 
                    contact us through the contact information below.
                </p>
            </section>

            <section className="sections">
                <h1 className="page-h1">Updates to Our Privacy Policy</h1>
                <p>
                    To the extent permitted by law, we may update this Privacy Policy periodically to reflect 
                    changes in our personal information practices or changes in applicable law. We will indicate 
                    at the top of this Privacy Policy when it was most recently updated. You are responsible for 
                    periodically reviewing the most current version on the site. To the extent allowed by law, 
                    your continued use of the site will be deemed your conclusive acceptance of the updated 
                    Privacy Policy.
                </p>
            </section>

            <section className="sections">
                <h1 className="page-h1">Contact Us</h1>
                <p>
                    If you have any issues or question, contact our customer service team via call or whatsapp
                    on this phone number 081 2605 9170 during our opening hours 
                    (Monday - Friday 9:00am - 6:00pm, Saturday - 9:00am - 1:00pm).
                </p>
            </section>

            <Footer/>

        </div>
    )
}