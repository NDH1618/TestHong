import background from './img/Background.png';
import backgroundmobile from './img/backgrounmb.png';
import bs2 from './img/bs2.svg';
import bs1 from './img/bs1.svg';

const HomePage = () => {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden hidden sm:block">
                <div
                    className="absolute inset-0 w-full flex gap-[6%]  "
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundColor: '#029CF6',
                    }}
                >
                    <div className="relative z-10 flex flex-col items-start gap-[20px] w-[50%] mt-[3%] ">
                        <img
                            src={bs2}
                            alt="First Image"
                            className="w-full max-w-[400px]"
                            style={{ height: 'auto', strokeWidth: '2px', stroke: '#FFF' }}
                        />
                        <img
                            src={bs1}
                            alt="Second Image"
                            className="absolute w-full max-w-[300px] sm:left-[25%] md:left-[28%] sm:top-[28%] md:top-[28%] lg:top-[40%]"
                            style={{height: 'auto',  objectFit: 'cover'  }}
                        />
                    </div>
                    <div
                        className="w-[50%] max-w-[35%] text-[#FFF] text-[28px] mt-[8%] flex flex-col gap-[22%]"
                        style={{fontFamily:'Montserrat', fontStyle:'normal', fontWeight:'600', lineHeight:"44px"}}
                    >
                        <p>Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản. Tôi biết những người yêu mến tôi là vì sự chân thật và giản dị.</p>
                        <div className="flex flex-col">
                            <div className="!text-[#FFDE05] text-[28px]" style={{fontWeight:'700'}}>THU QUỲNH</div>
                            <p className='text-[18px]' style={{fontWeight:'500'}}>Bác sĩ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden sm:hidden">
                <div
                    className="absolute inset-0 w-full flex flex-col items-center gap-[70px]  "
                    style={{
                        backgroundImage: `url(${backgroundmobile})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundColor: '#029CF6',
                    }}
                >
                    <div className="relative z-10 flex flex-col items-start gap-[20px] w-full mt-[-30px] ">
                        <img
                            src={bs2}
                            alt="First Image"
                            className="w-full max-w-[293px]"
                            style={{height: 'auto', strokeWidth: '2px',  stroke: '#FFF' }}
                        />
                        <img
                            src={bs1}
                            alt="Second Image"
                            className="absolute w-full max-w-[240px] top-[58%]"
                            style={{height: 'auto', left: '23%', objectFit: 'cover' }}
                        />
                    </div>
                    <div
                        className="w-full text-[#FFF] text-[16px] mt-[55px] flex flex-col gap-[26px] px-[33px]"
                        style={{fontFamily:'Montserrat', fontStyle:'normal', fontWeight:'600', lineHeight:"24px"}}
                    >
                        <p>Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản. Tôi biết những người yêu mến tôi là vì sự chân thật và giản dị.</p>
                        <div className="flex flex-col">
                            <div className="!text-[#FFDE05] text-[14px]" style={{fontWeight:'700'}}>THU QUỲNH</div>
                            <p className='text-[12px]' style={{fontWeight:'500'}}>Bác sĩ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;