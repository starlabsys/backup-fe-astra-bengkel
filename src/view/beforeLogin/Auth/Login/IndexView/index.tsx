import type { NextPageContext } from "next";
import { MdRemoveRedEye } from "react-icons/md";
import AuthAnimation from "../../../../../component/animation/auth/auth_animation";
import SpinLoading from "../../../../../component/animation/ISpinLoading/ISpinLoading";
import Image from "next/image";
import { LoginViewModel } from "./LoginController";
import logo from "../../../../../../public/img/logo2.png";

const LoginView = () => {
	const controller = LoginViewModel();

	return (
		<div
			className={`bg-bgLogin w-screen min-h-screen max-h-fit bg-contain tablet:bg-none tablet:bg-white-secondary5 relative overflow-y-scroll`}
			style={{
				backgroundSize: "cover",
				backgroundAttachment: "fixed"
			}}
		>
			<div
				className={`w-screen h-screen grid place-items-center place-content-center gap-5 px-5 tablet:flex tablet:gap-0`}
			>
				<div
					className={`bg-white w-full tablet:w-6/12 laptop:w-5/12 desktop:w-4/12 rounded-lg px-5 pt-5 pb-16 grid gap-5 tablet:h-3/5 tablet:rounded-none tablet:rounded-l-lg`}
				>
					<div
						className={`w-full flex place-items-center place-content-center`}
					>
						<Image src={logo} alt={""} className={`w-64`} />
					</div>
					<div className={`mt-5 grid gap-4 h-fit`}>
						<div
							className={`h-12 border border-secondary2 px-4 rounded-full flex place-content-center`}
						>
							<input
								className={`w-full focus:outline-none bg-transparent`}
								placeholder={`Username`}
								onChange={(event) => {
									controller.setUsername(event.target.value);
								}}
								required
							/>
						</div>
						<div
							className={`h-12 border border-secondary2 px-4 rounded-full flex place-content-center place-items-center`}
						>
							<input
								className={`w-full focus:outline-none bg-transparent`}
								type={controller.hide ? "password" : "text"}
								inputMode={"text"}
								placeholder={`Password`}
								onChange={(event) => {
									controller.setPassword(event.target.value);
								}}
								required
							/>
							<MdRemoveRedEye
								size={25}
								color={controller.hide ? "#4D35E4" : "#E21B1B"}
								className={`cursor-pointer`}
								onClick={() => {
									controller.setHide(!controller.hide);
								}}
							/>
						</div>
					</div>
					<div
						className={`mt-5 w-full h-12 bg-secondary3 flex place-items-center place-content-center rounded-full text-white font-Archivo font-semibold cursor-pointer`}
						onClick={
							controller.login
							// () => {
							//     context.setOpen( !context.open )
							// }
						}
					>
						{controller.loading ? <SpinLoading /> : null}
						Login
					</div>
				</div>
				<div
					className={`hidden tablet:grid bg-bgLogin bg-cover bg-center w-6/12 tablet:h-3/5 laptop:w-5/12 desktop:w-4/12 rounded-r-lg place-items-center place-content-center relative`}
				>
					<AuthAnimation />
					<div className="absolute bottom-5 text-center text-white-secondary font-Archivo text-md grid mt-5">
						<div>© 2018 PT. Astra International Tbk - HSO</div>
						<div>V 1.4.5</div>
					</div>
				</div>
				<div className={`tablet:hidden`}>
					<AuthAnimation />
				</div>
				<div className="text-center text-white-secondary font-Archivo text-md grid mt-5 tablet:hidden">
					<div>© 2018 PT. Astra International Tbk - HSO</div>
					<div>V 1.4.5</div>
				</div>
			</div>
		</div>
	);
};

LoginView.getInitialProps = async (context: NextPageContext) => {
	const cookies = context.req?.headers.cookie;
	return {
		props: {
			cookies: cookies
		}
	};
};

export default LoginView;
