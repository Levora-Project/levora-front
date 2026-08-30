import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

interface CardOwnProps {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

type CardProps = CardOwnProps &
  Omit<ComponentPropsWithoutRef<"div">, keyof CardOwnProps>;

function Card({
  as: Tag = "div",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <Tag
      className={`rounded-lg border p-4 border-neutral-100 bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

function CardHeader({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`p-5 border-b border-neutral-100 ${className}`}>
      {children}
    </div>
  );
}

function CardBody({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
