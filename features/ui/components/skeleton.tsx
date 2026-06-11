import * as React from 'react';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const skeletonVariants = cva('animate-pulse bg-muted rounded-md shrink-0', {
  variants: {
    variant: {
      default: 'bg-muted',
      card: 'bg-muted/60',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type SkeletonProps = {} & React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof skeletonVariants>

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(skeletonVariants({ variant, className }))}
      aria-hidden="true"
      {...props}
    />
  );
}
Skeleton.displayName = 'Skeleton';

type SkeletonTextProps = {
  lines?: number;
  lastLineWidth?: 'full' | '3/4' | '1/2' | '1/3';
} & SkeletonProps

function SkeletonText({
  lines = 3,
  lastLineWidth = '3/4',
  className,
  variant,
  ...props
}: SkeletonTextProps) {
  const widthMap = {
    full: 'w-full',
    '3/4': 'w-3/4',
    '1/2': 'w-1/2',
    '1/3': 'w-1/3',
  };

  return (
    <div className={cn('flex flex-col gap-2', className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant={variant}
          className={cn(
            'h-4',
            i === lines - 1 ? widthMap[lastLineWidth] : 'w-full',
          )}
          {...props}
        />
      ))}
    </div>
  );
}
SkeletonText.displayName = 'SkeletonText';

type SkeletonAvatarProps = {
  size?: 'sm' | 'default' | 'lg';
} & SkeletonProps

function SkeletonAvatar({
  size = 'default',
  className,
  variant,
  ...props
}: SkeletonAvatarProps) {
  const sizeMap = {
    sm: 'h-8 w-8',
    default: 'h-10 w-10',
    lg: 'h-14 w-14',
  };

  return (
    <Skeleton
      variant={variant}
      className={cn('rounded-full shrink-0', sizeMap[size], className)}
      {...props}
    />
  );
}
SkeletonAvatar.displayName = 'SkeletonAvatar';

type SkeletonButtonProps = {
  size?: 'sm' | 'default' | 'lg' | 'icon';
  width?: string;
} & SkeletonProps

function SkeletonButton({
  size = 'default',
  width,
  className,
  variant,
  ...props
}: SkeletonButtonProps) {
  const sizeMap = {
    sm: 'h-9',
    default: 'h-10',
    lg: 'h-11',
    icon: 'h-10 w-10',
  };

  return (
    <Skeleton
      variant={variant}
      className={cn(
        sizeMap[size],
        size !== 'icon' && (width ?? 'w-24'),
        'rounded-md',
        className,
      )}
      {...props}
    />
  );
}
SkeletonButton.displayName = 'SkeletonButton';

function SkeletonInput({ className, variant }: SkeletonProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)} aria-hidden="true">
      <Skeleton variant={variant} className="h-4 w-1/4" />
      <Skeleton variant={variant} className="h-10 w-full rounded-md" />
    </div>
  );
}
SkeletonInput.displayName = 'SkeletonInput';

type SkeletonCardProps = {
  showFooter?: boolean;
  showImage?: boolean;
  imageHeight?: string;
} & SkeletonProps

function SkeletonCard({
  showFooter = true,
  showImage = false,
  imageHeight = 'h-40',
  className,
  variant,
  ...props
}: SkeletonCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card p-6 space-y-4',
        className,
      )}
      aria-hidden="true"
      {...props}
    >
      {showImage && (
        <Skeleton
          variant={variant}
          className={cn(
            'w-full rounded-lg -mx-6 -mt-6 rounded-b-none',
            imageHeight,
          )}
          style={{ width: 'calc(100% + 3rem)' }}
        />
      )}

      <div className="flex items-center gap-3">
        <SkeletonAvatar variant={variant} />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton variant={variant} className="h-4 w-1/2" />
          <Skeleton variant={variant} className="h-3 w-1/3" />
        </div>
      </div>

      <SkeletonText lines={3} variant={variant} />

      {showFooter && (
        <div className="flex items-center gap-2 pt-2">
          <SkeletonButton variant={variant} />
          <SkeletonButton variant={variant} width="w-20" />
        </div>
      )}
    </div>
  );
}
SkeletonCard.displayName = 'SkeletonCard';

type SkeletonTableProps = {
  rows?: number;
  columns?: number;
} & SkeletonProps

function SkeletonTable({
  rows = 5,
  columns = 4,
  className,
  variant,
  ...props
}: SkeletonTableProps) {
  return (
    <div
      className={cn('w-full space-y-3', className)}
      aria-hidden="true"
      {...props}
    >
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} variant={variant} className="h-4 w-3/4" />
        ))}
      </div>
      <Skeleton variant={variant} className="h-px w-full" />
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              variant={variant}
              className={cn('h-4', colIndex === 0 ? 'w-3/4' : 'w-full')}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
SkeletonTable.displayName = 'SkeletonTable';

export {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonInput,
  SkeletonCard,
  SkeletonTable,
};
