type User = {
	name: string;
	email: string;
};

const users: User[] = [
	{
		name: "John Doe",
		email: "john@gmail.com",
	},
	{
		name: "Clare Watson",
		email: "clare@gmail.com",
	},
	{
		name: "James Chad",
		email: "james@gmail.com",
	},
];

export default function Home() {
	return (
		<div className="p-10">
			<input
				type="text"
				placeholder="Search..."
				className="border border-gray-400 p-2 rounded w-full mb-5"
			/>

			<div>
				<div className="bg-gray-200 text-left p-2 font-bold uppercase">
					<span>Name</span>
					<span>Email</span>
					<span>Role</span>
					<span>Actions</span>
				</div>
				{users.map((user) => (
					<div key={user.email} className="border-b border-gray-200">
						<span>{user.name}</span>
						<span>{user.email}</span>
						<span>Admin</span>
						<span>
							<button>Edit</button>
							<button>Delete</button>
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
