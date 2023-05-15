import styles from './About.module.scss';
import stylestheme from 'styles/Theme.module.scss';
import house from 'assets/about/house.png';
import pasta1 from 'assets/about/pasta1.png';
import pasta2 from 'assets/about/pasta2.png';

const images = [pasta1, pasta2];

export default function About(){
    return(
        <section>
            <h3 className={stylestheme.title}> About us</h3>
            <div className={styles.aboutUs}>
                <img src={house} alt="House Agnolini" width={600}/>
                <div className={styles.aboutUs__text}>
                    <p>
                        Agnolini, a charming pasta restaurant nestled in the heart of a vibrant city, invites you on a culinary journey through the rich flavors of Italy. As you step inside, the warm ambiance envelops you, setting the stage for an unforgettable dining experience. The aroma of freshly cooked pasta fills the air, drawing you closer to the open kitchen where skilled chefs meticulously craft each dish. Agnolini is a haven for pasta enthusiasts, offering a diverse menu that showcases traditional favorites and innovative creations, all made with the finest ingredients.
                    </p>
                    <p>
                        At Agnolini, the star of the show is undoubtedly the pasta. From delicate, hand-rolled gnocchi to perfectly al dente spaghetti, every bite is a celebration of authentic Italian cuisine. The menu features an array of tantalizing pasta dishes, each artfully prepared and bursting with flavors. Whether you crave a classic carbonara, a luscious lasagna, or a unique agnolotti stuffed with seasonal ingredients, Agnolini has something to satisfy every palate. Complemented by thoughtfully curated wine pairings, the dining experience at Agnolini is an ode to indulgence.
                    </p>
                    <p>
                        Beyond its delectable pasta offerings, Agnolini&apos;s commitment to exceptional service and attention to detail is evident in every aspect of your visit. The knowledgeable and passionate staff is always on hand to guide you through the menu, providing insightful recommendations and ensuring a memorable dining experience. The cozy, rustic decor creates a welcoming atmosphere that invites you to relax and savor the flavors of Italy. Whether you&apos;re seeking an intimate dinner for two or a gathering with friends and family, Agnolini is the perfect destination for those seeking exquisite pasta dishes and a warm, inviting ambiance.
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {images.map((image,index) => (
                    <div key={index} className={styles.images__image}>
                        <img src={image} alt="Image of Pasta" />
                    </div>
                ))}
            </div>
        </section>
    );
}