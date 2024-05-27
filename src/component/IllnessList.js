import React from 'react';
import './illnesslist.css';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function IllnessList(){

    return(
        <div className='illness-list'>
            <Header/>
            <ScrollToTop/>
            <div className='illness-list-inner'>
                <ul>
                    <li>Abscess</li>
                    <li>Acarpia</li>
                    <li>Acne</li>
                    <li>Adenoids (Adenitis)</li>
                    <li>Age spot</li>
                    <li>Alcoholism (Effect)</li>
                    <li>Allergic Dermatitis</li>
                    <li>Allergic Rhinitis (Hay Fever)</li>
                    <li>Alzheimer Senity</li>
                    <li>Amoeba</li>
                    <li>Anemia</li>
                    <li>Angina</li>
                    <li>Anorexia</li>
                    <li>Anuria</li>
                    <li>Anxiety</li>
                    <li>Appendicitis</li>
                    <li>Arteriosclerosis</li>
                    <li>Arthritis</li>
                    <li>Asthma</li>
                    <li>Atherosclerosis</li>
                    <li>Athlete's Foot</li>
                    <li>Back Ache</li>
                    <li>Bacteraemia</li>
                    <li>Barber's Itch</li>
                    <li>Bleeding Gums (gingivitis)</li>
                    <li>Blisters</li>
                    <li>Blocked Fallopian Tube</li>
                    <li>Blood Infection</li>
                    <li>Boils</li>
                    <li>Breathing Difficulty</li>
                    <li>Bronchitis</li>
                    <li>Bruxism</li>
                    <li>Bunion</li>
                    <li>Burns (Scalds)</li>
                    <li>Cancer</li>
                    <li>Cardiovascular Disease</li>
                    <li>Catarrh</li>
                    <li>Chicken Pox</li>
                    <li>Cholera</li>
                    <li>Chronic Fatigue (Exhaustion)</li>
                    <li>Cirrhosis (Liver Disease)</li>
                    <li>Climacteric (Menopause)</li>
                    <li>Cold Sore</li>
                    <li>Colitis</li>
                    <li>Conjunctivitis (Pink Eye)</li>
                    <li>Constipation</li>
                    <li>Corns</li>
                    <li>Coronary Thrombosis</li>
                    <li>Cystitis</li>
                    <li>CystsBenign</li>
                    <li>Debility (General)</li>
                    <li>Dehydration</li>
                    <li>Dementia (Mental Blockage)</li>
                    <li>Depression</li>
                    <li>Dermatitis</li>
                    <li>Diabetes Type II</li>
                    <li>Diarrhoea</li>
                    <li>Digestive Problem</li>
                    <li>Dry Skin</li>
                    <li>Dysmenorrhoea</li>
                    <li>Ear Infection</li>
                    <li>Eczema</li>
                    <li>Edema (Hydrops)</li>
                    <li>Elephantiasis</li>
                    <li>Emaciation (Maceration)</li>
                    <li>Embolism (Arterial Blockage)</li>
                    <li>Enervation</li>
                    <li>Epigastritis</li>
                    <li>Erysipelas (Sky Bacterial Infection)</li>
                    <li>Fainting Spells</li>
                    <li>Fatigue</li>
                    <li>Female Infertility</li>
                    <li>Fibroid</li>
                    <li>Flatulence (Stomach Gas)</li>
                    <li>Flu (Cough)</li>
                    <li>Freckles</li>
                    <li>Frigidity</li>
                    <li>Gastritis</li>
                    <li>German Measles</li>
                    <li>Gingivitis</li>
                    <li>Goitre</li>
                    <li>Gonorrhoea</li>
                    <li>Gout</li>
                    <li>Halitosis</li>
                    <li>Headache</li>
                    <li>Health Maintenance</li>
                    <li>Heart Burn</li>
                    <li>Heart Failure</li>
                    <li>Heart Palpitation</li>
                    <li>Haemorrhoid (Piles)</li>
                    <li>Hematuria</li>
                    <li>Hepatitis</li>
                    <li>Herpes Simplex (A, B)</li>
                    <li>Hormonal Imbalance</li>
                    <li>Hot Flushes</li>
                    <li>Hypertension</li>
                    <li>Inflamed Intestine</li>
                    <li>Laryngitis</li>
                    <li>Leg Cramps</li>
                    <li>Liver Problem</li>
                    <li>Low Sperm Count</li>
                    <li>Lupus Erythematosus (LE)</li>
                    <li>Malaria</li>
                    <li>Malnutrition</li>
                    <li>Measles Sore</li>
                    <li>Mental Block</li>
                    <li>Migraine (Headache)</li>
                    <li>Multiple Sclerosis (MS)</li>
                    <li>Mumps (Epidemic Parotitis)</li>
                    <li>Myocardial Infection</li>
                    <li>Myocarditis (Myocardial Inflammation)</li>
                    <li>Muscle Cramps</li>
                    <li>Muscular Dystrophy</li>
                    <li>Nail Whitlows</li>
                    <li>Nausea & Vomiting</li>
                    <li>Nervous Depression</li>
                    <li>Nephritis</li>
                    <li>Obesity (Due to Over Eating)</li>
                    <li>Osteoporosis</li>
                    <li>Parkinson Disease</li>
                    <li>Phlebitis</li>
                    <li>Pneumonia</li>
                    <li>Polyp</li>
                    <li>Pre-Menstrual Syndrome</li>
                    <li>Prostatitis</li>
                    <li>Psoriasis</li>
                    <li>Pulmonary Emphysema</li>
                    <li>Rheumatic Fever</li>
                    <li>Scarlet Fever</li>
                    <li>Seizures (Epilepsy, Ictus, Raptus)</li>
                    <li>Sinusitis</li>
                    <li>Skin Blemish</li>
                    <li>Sore (Ulcerated)</li>
                    <li>Spastic Colon Irritable Bowel Syndrome Mucous Colitis</li>
                    <li>Spines and Disc. (Pain & Aches)</li>
                    <li>Staphylococcus</li>
                    <li>Stomach Ulcer</li>
                    <li>Stress</li>
                    <li>Stroke (Thrombosis in the Leg)</li>
                    <li>Sunburn (Erythematic Solare)</li>
                    <li>Tethanus (Lockjaw)</li>
                    <li>Tonsillitis</li>
                    <li>Tuberculosis (T. B. Bacillus)</li>
                    <li>Tumor cancer (Malignant) Neoplasm</li>
                    <li>Uric Acid</li>
                    <li>Vaginitis</li>
                    <li>Varicose Vein</li>
                    <li>Venereal Disease</li>
                    <li>Vertigo (Light Headedness)</li>
                    <li>Wart (Verruca)</li>
                    <li>Weak Erection</li>
                    <li>Whitlow (Felon)</li>
                    <li>Wound (Ulcerated)</li>
                    <li>Wrinkles (Furrow Crease)</li>
                    <li>Yeast Infection</li>
                </ul>
            </div>
            <Footer/>
        </div>
    )
}