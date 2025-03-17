export default function FormLayout({ children, rightSide }) {
    return (
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-xl flex">
        {children}
        {rightSide}
      </div>
    );
  }