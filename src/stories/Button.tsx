import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "cva";
import * as React from "react";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonStyles> {
	asChild?: boolean;
}

const buttonStyles = cva({
	base: [
		"whitespace-nowrap rounded-md",
		"inline-flex items-center justify-center",
		"font-medium transition-colors",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
		"disabled:pointer-events-none disabled:opacity-50",
	],
	variants: {
		variant: {
			default:
				"bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-300",
			outline:
				"border border-gray-900 text-dark-900 bg-white hover:bg-gray-900 hover:text-white",
		},
		size: {
			default: "text-base",
			large: "text-lg",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "large",
	},
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size = "large", asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonStyles({ variant, size, className }))}
				ref={ref}
				{...props}
				style={{
					textAlign: "center",
					backgroundColor: "#e73649",
					padding: "15px 20px",
					borderRadius: "8px",
					fontSize: size === "large" ? "150%" : "100%",
					display: "inline-block",
				}}
			/>
		);
	},
);
