import { highlight, languages } from "prismjs";
import type * as React from "react";
import "prismjs/components/prism-jsx";

const Code: React.FC<{ code: string; language: string }> = ({
	code,
	language = "javascript",
}) => {
	const languageL = language.toLowerCase();
	const prismLanguage = languages[languageL] || languages.javascript;

	const langClass = `language-${language.toLowerCase()}`;

	return (
		<pre className={`notion-code ${langClass}`}>
			<code
				className={langClass}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: highlight(code, prismLanguage, language),
				}}
			/>
		</pre>
	);
};

export default Code;
