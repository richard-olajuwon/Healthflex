import React from 'react';
import './productlist.css';
import Header from './Header';
import Footer from './Footer';

export default function ProductList(){

    return(
        <div className='product-list'>
            <Header/>
            <div className='product-intro'> <h2> Some of our products and their health benefits </h2> </div>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/reishi.webp' alt='reishi'/>
                    <h2 className='product-name'>Reishi</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>
                            Boosts immune system by promoting the activities of antibodies and slows 
                            down the progression of HIV 
                        </li>
                        <li>Stabilizes blood pressure and prevents bronchitis & arteriosclerosis</li>
                        <li>Effective anti-infection and anti-virus</li>
                        <li>Reduces allergies, inflammation and altitude sickness</li>
                        <li>Fight against fatigue and impotency</li>
                        <li>A potent source of antioxidants</li>
                    </ul>
                </div>
            </section>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/golden-six.webp' alt='golden six'/>
                    <h2 className='product-name'>Golden Six</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>Improves the function of the Kidney and smoothens the nerves</li>
                        <li>Relieves back pain caused by Kidney-Yin deficiency</li>
                        <li>
                            Effective for treatment of female infertility, rheumatism, stroke,
                            menstrual cramps and arthritis
                        </li>
                        <li>Relieves type II diabetes</li>
                        <li>
                            Protects against accelerated aging and takes care of fatigue which
                            could be caused by work stress and pressures
                        </li>
                        <li>Helps to lower blood sugar, blood fat and blood pressures</li>
                        <li>Boosts immune system</li>
                    </ul>
                </div>
            </section>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/ultramega.webp' alt='ultramega'/>
                    <h2 className='product-name'>UltraMega</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>Improves heart health and reduces inflammation in the body</li>
                        <li>Effective for weight management (Cholestrol reduction)</li>
                        <li>Improves and enhance immune system by boosting its function and ability</li>
                        <li>Powerful anti-depressants</li>
                        <li>Helpful for Alzheimer disease and hyperactivity disorder patients</li>
                    </ul>
                </div>
            </section>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/Qinghao.webp' alt='qinghao'/>
                    <h2 className='product-name'>Qinghao</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>
                            Treatment of all forms of malaria, especially those caused by Plasmodium 
                            falciparum malaria and multi-drug resistant malaria
                        </li>
                    </ul>
                </div>
            </section>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/golden-hypha.webp' alt='golden-hypha'/>
                    <h2 className='product-name'>Golden Hypha</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>Boost immune system and fights against virus outbreak</li>
                        <li>Relieve hepatitis, neurodermatitis and side effect of cancer and tumor treatment</li>
                    </ul>
                </div>
            </section>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/re-vive.webp' alt='re-vive'/>
                    <h2 className='product-name'>Re-vive</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>Enhances male sexual performace</li>
                        <li>Delays ejaculation</li>
                        <li>Increases sperm count and libido</li>
                        <li>Improves mental alertness</li>
                        <li>Gives strong and hard erection</li>
                        <li>Relieves waist pain and promotes stamina</li>
                    </ul>
                </div>
            </section>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/cordi-active.webp' alt='cordi active'/>
                    <h2 className='product-name'>Cordi Active</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>Effective for tuberculosis and promotes healthy lung function</li>
                        <li>Increases vitality, alleviates stress and delays aging process</li>
                        <li>Relives nephritis, emphysema, asthma, cardiopathy and hypertension</li>
                        <li>Good for elderly people</li>
                    </ul>
                </div>
            </section>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/colon-cleanser.webp' alt='colon cleanser'/>
                    <h2 className='product-name'>Colon Cleanser</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>Regulates bowel movement, eases stomach and intestinal peristalsis</li>
                        <li>Relieve occasional constipation and boost appetite</li>
                        <li>Naturally promotes healthy digestion and normal process of detoxification by the body</li>
                    </ul>
                </div>
            </section>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/calmazine.webp' alt='calmazine'/>
                    <h2 className='product-name'>Calmazine</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>Build and supports healthy bones and teeth</li>
                        <li>Effective for normal growth and development, physical immunity, cell division and metabolism</li>
                        <li>Promote heart, nerve and muscle functions and overall health</li>
                        <li>Regulate blood pressure, body weight and prevent hypertension</li>
                        <li>Provides 100% daily requirement of calcium, magnesium and zinc</li>
                    </ul>
                </div>
            </section>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/gum-care.webp' alt='gum care'/>
                    <h2 className='product-name'>Gum Care Toothpaste</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>Possesses great anti-inflammatory effects on the gum to generally protect gum health</li>
                        <li>Removes and prevents formation of dental plagues and tartars</li>
                        <li>Prevent dental caries and periodontal (gum) disease</li>
                        <li>Decrease prevalence of halitosis for fresh breath</li>
                        <li>Removes teeth stains</li>
                        <li>Strengthens the enamel and maintains healthy teeth</li>
                    </ul>
                </div>
            </section>

            <section className='product-container'>
                <div className='imagexname'>
                    <img className='product-image' src='https://healthflex-files.s3.eu-north-1.amazonaws.com/jointeez.webp' alt='jointeez'/>
                    <h2 className='product-name'>Jointeez</h2>
                </div>

                <div className='health-benefits-container'>
                    <h3>Health Benefits:</h3>
                    <br/>
                    <ul>
                        <li>
                            Effective for dispelling wind and eliminating dampness, activating blood and removing 
                            blood stasis, dredging meridians and alleviating pain from muscles and joints.
                        </li>
                        <li>
                            Also used for the treatment of diseases caused by rheumatism, obstruction, congestion and 
                            blocked meridians and patients with symptoms of joint pain, stabbing pain or severe pain, 
                            rheumatic arthritis, rheumatoid arthritis and ischialgia.
                        </li>
                    </ul>
                </div>
            </section>

            <Footer/>
        </div>
    )
}