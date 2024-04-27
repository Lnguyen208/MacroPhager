import './Public.scss';
import Footer from '../../components/footer/Footer';
import PublicNavbar from '../../components/navbar/PublicNavbar';


const Public = () => {

    return (
        <div className='Public'>
            <div className='publicContainer'>
                <PublicNavbar></PublicNavbar>
                <div className='publicPage'>
                    <div className='temporary'>
                        <div className='title'>
                            Balancing Macros with Finesse
                        </div>
                        <div className='title'>
                            A Culinary Symphony
                        </div>
                        <div className='description'>
                            Ah, the delicate dance of macros--<em>the proteins, fats, and carbs</em> pirouetting on our plates.
                        </div>
                        <div className='description'>
                            In this gastronomic ballet, we savor the <em>harmonious interplay of flavors, textures, and nutrients</em>. Let's elevate your quote to a culinary crescendo:
                        </div>
                        <div className='description quote'>
                            "In the grand feast of life, let us waltz through macros with grace, savoring each bite as if it were a note in a symphony."
                        </div>
                        <div className='description' style={{ fontStyle: 'italic', textAlign: 'center'}}>
                            Bon appetit!
                        </div>
                    </div>
                </div>
            </div>
                <Footer></Footer>
        </div>
    );
}

export default Public