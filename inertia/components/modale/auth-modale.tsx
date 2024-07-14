import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { useAuthModal } from "~/hooks/useAuthModal";
import LoginForm from "../auth/login-form";
import RegisterForm from "../auth/register-form";

const AuthModal = () => {
    const contactModalOnClose = useAuthModal.use.onClose();
    const contactModalIsOpen = useAuthModal.use.isOpen();
    const contactModalTab = useAuthModal.use.tab();
    const [activeTab, setActiveTab] = useState(contactModalTab);
    function selectTab(tab: string) {
        setActiveTab(tab);
    }
    useEffect(() => {
        setActiveTab(contactModalTab);
    }, [contactModalTab]);
    return (
        <Modal
            title={activeTab === "login" ? "Connexion" : "Inscription"}
            isOpen={contactModalIsOpen}
            onClose={contactModalOnClose}
            dialogContentClasses="md:max-w-md md:px-8"
            dialogTitleClasses="text-xl "
            description={activeTab === "login" ? "Connectez-vous à votre compte" : "Créez un compte pour continuer"}
        >
            <div className="mt-3">
                {activeTab === "login" && (
                    <LoginForm
                        mode="modal"
                        onAlreadyHaveAnAccountClick={selectTab}
                    />
                )}
                {activeTab === "register" && (
                    <RegisterForm
                        mode="modal"
                        onAlreadyHaveAnAccountClick={selectTab}
                    />
                )}
            </div>
        </Modal>
    );
};

export default AuthModal;

