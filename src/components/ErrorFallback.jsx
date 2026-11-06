const ErrorFallback = () => {
    return (
        <section role="alert" className="min-h-screen flex flex-col justify-center items-center gap-5 px-10 text-center">
            <h1 className="text-(--color-white)">Something went wrong</h1>
            <p className="text-(--text-muted)">Please reload the page. If the problem continues, email me at michaelnavidad36@gmail.com.</p>
            <button type="button" className="primary-btn pr-[25px]!" onClick={() => window.location.reload()}>Reload Page</button>
        </section>
    );
};

export default ErrorFallback;
