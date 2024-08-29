import * as React from "react";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link";
	size?: "default" | "large";
	ref?: React.Ref<HTMLButtonElement>;
}

const getButtonClasses = (
	variant: string,
	size: string,
	className?: string,
) => {
	const baseClasses =
		"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:underline";

	const variantClasses: { [key: string]: string } = {
		default: "bg-red-500 text-white hover:bg-red-600",
		destructive:
			"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
		outline:
			"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
		secondary:
			"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
		ghost: "hover:bg-accent hover:text-accent-foreground",
		link: "text-primary underline-offset-4",
	};

	const sizeClasses: { [key: string]: string } = {
		default: "h-9 px-4 py-2",
		large: "h-11 px-6 py-3 text-lg",
	};

	return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
		className || ""
	}`;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "default", size = "default", ...props }) => {
		return (
			<button
				className={getButtonClasses(variant, size, className)}
				{...props}
			/>
		);
	},
);

export { Button };
