import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

const Casa = () => {
    const loggedIn = {firstName: 'Francisco'};

    return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Bienvenido"
                    user={loggedIn?.firstName || 'Invitado'}
                    subtext="Maneja y administra tus cuentas y transacciones de manera segura."
                />
                
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1200.75}
                />
            </header>
        </div>
    </section>
    )
}

export default Casa