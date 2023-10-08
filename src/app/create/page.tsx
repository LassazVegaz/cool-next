type FieldRowProps = {
	label: string;
} & React.ComponentPropsWithoutRef<"input">;

const FieldRow = (props: FieldRowProps) => {
	const { label, ...inputProps } = props;

	return (
		<div className="flex justify-between">
			<label htmlFor={props.name}>
				{label}
				{props.required && <span className="text-red-500">*</span>}
			</label>
			<input
				type="text"
				{...inputProps}
				className="ml-8 inline-block rounded w-64 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
			/>
		</div>
	);
};

export default function Home() {
	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<form className="bg-slate-200 p-5 rounded-xl">
				<div className="text-center text-3xl mb-8">Create User</div>

				<div className="flex flex-col gap-3">
					<FieldRow label="Name" />

					<FieldRow label="Email" type="email" />

					<FieldRow label="Password" type="password" />

					<FieldRow label="Confirm Password" type="password" />
				</div>

				<div className="flex justify-center mt-8">
					<button className="bg-slate-500 hover:bg-slate-600 text-white rounded py-1 px-5">
						Create
					</button>
				</div>
			</form>
		</div>
	);
}
