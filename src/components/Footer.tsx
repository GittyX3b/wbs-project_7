type FooterProps = {
    className?: string;
};

const Footer = ({ className }: FooterProps) => {
    return (
        <footer
            className={`footer sm:footer-horizontal footer-center bg-base-300 text-base-content ${className}`}
        >
            <p>
                Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd
            </p>
        </footer>
    );
};

export { Footer };
