"use client"
import { useFormState } from "react-dom"
import { login } from "@/actions/userActions"
import {useState} from "react";

export default function LoginPage(){
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const [ state, action, isPending ] = useFormState(login, null)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
    return(
        <div className={"w-[50vh] border my-4 rounded-2xl p-5 mx-auto"}>
            <form action={action} className="space-y-3 dark:text-white">
                <div className="glass flex flex-col gap-5 rounded-lg ">
                    <h1 className={`mb-3 text-2xl`}>
                        Please log in to continue.
                    </h1>
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">

                            <input
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 text-gray-900 p-2.5 dark:bg-gray-700 dark:text-white"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                            />
                            <svg className="tpointer-events-none dark:text-white absolute left-3 top-1/2 h-[18px] w-[18px]
                            -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                      clipRule="evenodd"/>
                            </svg>

                        </div>
                    </div>
                    {state?.errors?.email && <p className={"text-red-600"}>{state.errors.email}</p>}

                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative flex gap-1">
                            <input
                                className="flex-1 peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 text-gray-900 p-2.5 dark:bg-gray-700 dark:text-white"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter password"
                            />
                            <svg className="tpointer-events-none dark:text-white absolute left-3 top-1/2 h-[18px] w-[18px]
                            -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                      clipRule="evenodd"/>
                            </svg>

                            <button onClick={togglePassword}
                                    className={"flex border-2 border-blue-900 bg-blue-900/25 rounded-xl text-center justify-center items-center p-3"}>
                                {showPassword ?
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeWidth="2"
                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                        <path stroke="currentColor" strokeWidth="2"
                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                    : <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                           xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                           viewBox="0 0 24 24">
                                        <path
                                            d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z"/>
                                        <path
                                            d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
                                        <path
                                            d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
                                    </svg>
                                }
                            </button>
                        </div>
                    </div>
                    {state?.errors?.password && (
                        <div className={"text-red-600"}>
                            <p>Password must:</p>
                            <ul className={"ml-3"}>
                                {state.errors.password.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <button
                        className={"flex w-full border-2 border-blue-900 bg-blue-900/25 rounded-xl text-center justify-center items-center py-3"}
                        aria-disabled={isPending} type="submit">
                        {isPending ? 'Submitting...' : 'Sign up'}
                    </button>
                </div>
            </form>
        </div>
    )
}

/*
    <form action={dispatch}>

        <div className="w-full">
            <div>
                <label
                    className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 text-gray-900 p-2.5 dark:bg-gray-700 dark:text-white"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none dark:text-white absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

        </div>
        <Button type="submit" className="mt-4 w-full" >
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        <Link href='/' className="mt-4 w-full flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
          Back to home <HomeIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Link>
        <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
        >
          {state === 'CredentialsSignin' && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">Invalid credentials</p>
              </>
          )}
        </div>
      </div>
    </form>

 */
