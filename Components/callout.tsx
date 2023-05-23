"use client";
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";

type Props = {
  message: string;
  warning: boolean;
};

function callout({ message, warning }: Props) {
  return <div>callout</div>;
}

export default callout;
