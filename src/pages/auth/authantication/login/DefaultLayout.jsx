export default function DefaultLayout({ children }) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
        {children}
      </div>
    );
  }