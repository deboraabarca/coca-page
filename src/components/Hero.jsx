import '../styles/Hero.css';
    const Hero = () => {
    const platforms = [
        { name: 'Slack', icon: '/icons/slack.svg' },
        { name: 'Discord', icon: '/icons/discord.svg' },
        { name: 'Teams', icon: '/icons/teams.svg' },
        { name: 'Messenger', icon: '/icons/messenger.svg' },
        { name: 'WhatsApp', icon: '/icons/whatsapp.svg' },
        { name: 'Telegram', icon: '/icons/telegram.svg' }
    ];

    return (
        <section className="hero">
        <div className="container hero__container">
            <h1 className="hero__title">
            Provide real-time support through chat for your customers
            </h1>
            <p className="hero__subtitle">
            Connect with your customers where they are
            </p>
            <button className="button button-primary hero__cta">
            Try for free
            </button>
            
            <div className="hero__platforms">
            {platforms.map((platform) => (
                <div key={platform.name} className="hero__platform">
                <img 
                    src={platform.icon} 
                    alt={platform.name} 
                    className="hero__platform-icon"
                />
                </div>
            ))}
            </div>

            <div className="hero__floating-elements">
            <div className="hero__element hero__element--1"></div>
            <div className="hero__element hero__element--2"></div>
            <div className="hero__element hero__element--3"></div>
            </div>
        </div>
        </section>
    );
    };

    export default Hero;